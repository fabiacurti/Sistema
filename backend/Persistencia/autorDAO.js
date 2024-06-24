const banco = require("../config/database.js");//Database

//const banco = new Database()

class AutorDAO {
    ID;
    nome;
    sobrenome;
    dNascimento;
    cidadeNascimento;
    genero;
    email;
    qntObras

    constructor(ID, nome, sobrenome, dNascimento, cidadeNascimento, genero, email, qntObras) {
        this.ID = ID,
        this.nome = nome
        this.sobrenome = sobrenome
        this.dNascimento = dNascimento
        this.cidadeNascimento = cidadeNascimento
        this.genero = genero
        this.email = email
        this.qntObras = qntObras
    }

    async getAllDAO(connection) {
        const autores = await banco.ExecutaComando(connection,'select * from autor')
        return autores
    }

    async getByIdDAO(connection,ID) {
        const result = await banco.ExecutaComando( connection,'select * from autor WHERE ID = ?', [ID])
        const autor = result[0];
        return autor
    }

    async deleteDAO(connection,ID) {
        await banco.ExecutaComandoNonQuery(connection,'delete from autor where id=?', [ID])
    }


    async createDAO(connection,dadosAutor) {
        await banco.ExecutaComandoNonQuery(connection,'insert into autor set ?', dadosAutor)
    }

    async updateDAO(connection,ID, dadosAutor) {
        await banco.ExecutaComando(connection,'update autor set ? where id=?', [dadosAutor, ID])
    }

    async filtrarDAO(connection,{ Nome, genero }) {
        var sql = `select * FROM autor where Nome like '%${Nome}%' and genero=?`
        if (genero == "Todos") {
            sql = `select * FROM autor where Nome like '%${Nome}%'`
        }
        const autores = await banco.ExecutaComando(connection,sql, genero)
        return autores

    }

}
module.exports = AutorDAO