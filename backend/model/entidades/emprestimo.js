const banco = require("../database");//Database

//const banco = new Database();

class Emprestimo {
    constructor(ID, ID_Livro, ID_AlunoProf, dEmprestimo, dDevolucao) {
        this.ID = ID;
        this.ID_Livro = ID_Livro;
        this.ID_AlunoProf = ID_AlunoProf;
        this.dEmprestimo = dEmprestimo;
        this.dDevolucao = dDevolucao;
    }

    async getAll() {
        const query = `
            SELECT
                emprestimo.ID,
                emprestimo.ID_Livro,
                cadlivro.nomeLivro,
                emprestimo.ID_AlunoProf,
                alunoprofessor.Nome,
                emprestimo.dEmprestimo,
                emprestimo.dDevolucao,
                cadlivro.id,
                cadlivro.numeroPagina,
                editoras.id as editora_id,
                editoras.nome as editora,
                generos.id AS genero_id,
                generos.descricao as genero,
                cadlivro.dataPublicacao
            FROM
                emprestimo
            INNER JOIN
                cadlivro ON emprestimo.ID_Livro = cadlivro.id
            INNER JOIN
                generos ON cadlivro.genero = generos.descricao
            INNER JOIN
                editoras ON cadlivro.editora = editoras.nome
            INNER JOIN 
                alunoprofessor ON emprestimo.ID_AlunoProf = alunoprofessor.cpf;
        `;
        
        const emprestimos = await banco.ExecutaComando(query);
    
        const emprestimosFormatados = emprestimos.map(emprestimo => ({
            ID: emprestimo.ID,
            livro: {
                id: emprestimo.id,
                nomeLivro: emprestimo.nomeLivro,
                numeroPagina: emprestimo.numeroPagina,
                editora: {
                    id: emprestimo.editora_id,
                    nome: emprestimo.editora 
                },
                genero: {
                    id: emprestimo.genero_id,
                    descricao: emprestimo.genero
                },
                dataPublicacao: emprestimo.dataPublicacao,
            },
            alunoprofessor: {
                id: emprestimo.ID_AlunoProf,
                Nome: emprestimo.Nome
            },
            dEmprestimo : emprestimo.dEmprestimo,
            dDevolucao : emprestimo.dDevolucao
            
        }));
     
        return emprestimosFormatados;
    }

    async getById(ID) {
        const query = 'SELECT * FROM emprestimo WHERE ID = ?';
        const result = await banco.ExecutaComando(query, [ID]);
        return result[0];
    }

    async delete(ID) {
        await banco.ExecutaComandoNonQuery('DELETE FROM emprestimo WHERE ID = ?', [ID]);
    }

    async create(dadosEmprestimo) {
        await banco.ExecutaComandoNonQuery('INSERT INTO emprestimo SET ?', dadosEmprestimo);
    }

    async update(ID, dadosEmprestimo) {
        await banco.ExecutaComando('UPDATE emprestimo SET ? WHERE ID = ?', [dadosEmprestimo, ID]);
    }

    async filtrar({ID_Livro}) {
        const query = `
            SELECT
                emprestimo.ID,
                emprestimo.ID_Livro,
                cadlivro.nomeLivro,
                emprestimo.ID_AlunoProf,
                alunoprofessor.Nome as nomeUsuario,
                emprestimo.dEmprestimo,
                emprestimo.dDevolucao,
                cadlivro.id,
                cadlivro.numeroPagina,
                editoras.id as editora_id,
                editoras.nome as editora,
                generos.id AS genero_id,
                generos.descricao as genero,
                cadlivro.dataPublicacao
            FROM
                emprestimo
            INNER JOIN
                cadlivro ON emprestimo.ID_Livro = cadlivro.id
            INNER JOIN
                generos ON cadlivro.genero = generos.descricao
            INNER JOIN
                editoras ON cadlivro.editora = editoras.nome
            INNER JOIN 
                alunoprofessor ON emprestimo.ID_AlunoProf = alunoprofessor.cpf
                WHERE emprestimo.ID_Livro LIKE '%${ID_Livro}%';
            
        `;
        
        const emprestimos = await banco.ExecutaComando(query);
    
        const emprestimosFormatados = emprestimos.map(emprestimo => ({
            ID: emprestimo.ID,
            livro: {
                id: emprestimo.id,
                nomeLivro: emprestimo.nomeLivro,
                numeroPagina: emprestimo.numeroPagina,
                editora: {
                    id: emprestimo.editora_id,
                    nome: emprestimo.editora 
                },
                genero: {
                    id: emprestimo.genero_id,
                    descricao: emprestimo.genero
                },
                dataPublicacao: emprestimo.dataPublicacao,
            },
            alunoprofessor: {
                id: emprestimo.ID_AlunoProf,
                nome: emprestimo.nome
            },
            dEmprestimo : emprestimo.dEmprestimo,
            dDevolucao : emprestimo.dDevolucao
            
        }));
     
        return emprestimosFormatados;
    }
}

module.exports = Emprestimo;
