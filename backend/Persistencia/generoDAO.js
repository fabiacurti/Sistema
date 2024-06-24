const banco = require('../config/database.js');

//const banco = new Database()

class GeneroDAO {
    constructor(id, codigo, descricao, isAtivo) {
        this.id = id;
        this.codigo = codigo;
        this.descricao = descricao;
        this.isAtivo = isAtivo;
    }

    async obterTodosDAO(connection) {
        const generos = await banco.ExecutaComando(connection,'select * from generos')
        return generos;
    }

    async createDAO(connection,generoData) {
        const parametros = [generoData.codigo, generoData.descricao, generoData.isAtivo];
        const query = 'INSERT INTO generos (codigo, descricao, isAtivo) VALUES (?, ?, ?)';
    
        try {
            const resultado = await banco.ExecutaComando(connection,query, parametros);
            return resultado;
        } catch (error) {
            console.error('Erro ao cadastrar gênero:', error);
            throw new Error('Erro ao cadastrar gênero no banco de dados.');
        }
    }
    
    


    async deleteDAO(connection,ID) {
        await banco.ExecutaComandoNonQuery(connection,'delete from generos where id=?', [ID])
    }

    async updateDAO(connection,ID, dadosGenero) {
        if (!dadosGenero.descricao) {
          throw new Error('A propriedade "descricao" é obrigatória para atualizar o gênero.');
        }
    
        const campos = Object.keys(dadosGenero).map((campo) => `${campo} = ?`).join(', ');
        const valores = Object.values(dadosGenero);
    
        
        valores.push(ID);
    
        const query = `UPDATE generos SET ${campos} WHERE id=?`;
    
        try {
          await banco.ExecutaComando(connection,query, valores);
        } catch (error) {
          console.error('Erro ao executar o comando SQL de atualização:', error);
          throw new Error('Erro ao atualizar gênero no banco de dados.');
        }
      }
    

}

module.exports = GeneroDAO;
