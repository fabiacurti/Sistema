import Cliente from '../Models/Cliente.js';
import conectar from '../Repository/Conexao.js';

export default class ClienteBase {
    async incluir(cliente) {
        if (cliente instanceof Cliente) {
            try {
                const conexao = await conectar();
                const sql = 'INSERT INTO clientes(cpf, nome, endereco, bairro, cidade, uf, telefone, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
                const valores = [cliente.cpf, cliente.nome, cliente.endereco, cliente.bairro, cliente.cidade, cliente.uf, cliente.telefone, cliente.email];
                await conexao.query(sql, valores);                
                await conexao.end();
                console.log('Cliente incluído com sucesso.');
            } catch (error) {
                console.error('Erro ao incluir cliente:', error);
            }
        }
    }

    async alterar(cliente) {
        if (cliente instanceof Cliente) {
            try {
                const conexao = await conectar();
                const sql = 'UPDATE clientes SET nome=?, endereco=?, bairro=?, cidade=?, uf=?, telefone=?, email=? WHERE cpf=?';
                const valores = [cliente.nome, cliente.endereco, cliente.bairro, cliente.cidade, cliente.uf, cliente.telefone, cliente.email, cliente.cpf];
                await conexao.query(sql, valores);
                await conexao.end();
                console.log('Cliente alterado com sucesso.');
            } catch (error) {
                console.error('Erro ao alterar cliente:', error);
            }
        }
    }

    async excluir(cliente) {
        if (cliente instanceof Cliente) {
            try {
                const conexao = await conectar();
                const sql = 'DELETE FROM clientes WHERE cpf=?';
                const valores = [cliente.cpf];
                await conexao.query(sql, valores);
                await conexao.end();
                console.log('Cliente excluído com sucesso.');
            } catch (error) {
                console.error('Erro ao excluir cliente:', error);
            }
        }
    }

    async consultar(termo) {
        try {
            const conexao = await conectar();
            const sql = 'SELECT * FROM clientes WHERE nome LIKE ?';
            const valores = ['%' + termo + '%'];
            const [rows] = await conexao.query(sql, valores);
            await conexao.end();
            
            const listaClientes = [];
            for (const row of rows) {
                const cliente = new Cliente(row['cpf'], row['nome'], row['endereco'], row['bairro'], row['cidade'], row['uf'], row['telefone'], row['email']);
                listaClientes.push(cliente);
            }
            return listaClientes;
        } catch (error) {
            console.error('Erro ao consultar clientes:', error);
            return [];
        }
    }

    async consultarCPF(cpf) {
        try {
            const conexao = await conectar();
            const sql = 'SELECT * FROM cliente WHERE cpf = ?';
            const valores = [cpf];
            const [rows] = await conexao.query(sql, valores);
            await conexao.end();
            
            const listaClientes = [];
            for (const row of rows) {
                const cliente = new Cliente(row['cpf'], row['nome'], row['endereco'], row['bairro'], row['cidade'], row['uf'], row['telefone'], row['email']);
                listaClientes.push(cliente);
            }
            return listaClientes;
        } catch (error) {
            console.error('Erro ao consultar cliente por CPF:', error);
            return [];
        }
    }
}
