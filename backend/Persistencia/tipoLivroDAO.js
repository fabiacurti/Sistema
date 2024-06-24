const banco = require("../config/database.js");

//const banco = new Database()

class TipoLivroDAO {
    ID;
    nome;
    faixaEtaria;
    nivelLeitura;
    formato

    constructor(ID, nome, faixaEtaria, nivelLeitura, formato) {
        this.ID = ID,
        this.nome = nome
        this.faixaEtaria = faixaEtaria
        this.nivelLeitura = nivelLeitura
        this.formato = formato
        
    }

    async getAllDAO(connection) {
        const tipoLivros = await banco.ExecutaComando(connection,'select * from tipoLivro')
        return tipoLivros
    }

    async getByIdDAO(connection,ID) {
        const result = await banco.ExecutaComando(connection,'select * from tipoLivro WHERE ID = ?', [ID])
        const tipoLivro = result[0];
        return tipoLivro
    }

    async deleteDAO(connection,ID) {
        await banco.ExecutaComandoNonQuery(connection,'delete from tipoLivro where id=?', [ID])
    }


    async createDAO(connection,dadosTipoLivro) {
        await banco.ExecutaComandoNonQuery(connection,'insert into tipoLivro set ?', dadosTipoLivro)
    }

    async updateDAO(connection,dadosTipoLivro, ID) {
        await banco.ExecutaComando(connection,'update tipoLivro set ? where id=?', [dadosTipoLivro, ID])
    }

    async filtrarDAO(connection,{ Nome, faixaEtaria }) {
        var sql = `SELECT * FROM tipoLivro WHERE Nome like '%${Nome}%' AND faixaEtaria = ?`
        if (faixaEtaria == "Todos") {
            sql = `select * FROM tipoLivro where Nome like '%${Nome}%'`
        }
        const tipoLivros = await banco.ExecutaComando(connection,sql, faixaEtaria)
        return tipoLivros

    }



}
module.exports = TipoLivroDAO