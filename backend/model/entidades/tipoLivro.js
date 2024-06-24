const tipoLivroDAO = require("../../Persistencia/tipoLivroDAO.js");

//const banco = new Database()

class TipoLivro {

    async getAll(connection) {
        const tipolivroDAO = new tipoLivroDAO
        const tipoLivros = await tipolivroDAO.getAllDAO(connection)
        return tipoLivros
    }

    async getById(connection,ID) {
        const tipolivroDAO = new tipoLivroDAO
        const tipoLivro = await tipolivroDAO.getByIdDAO(connection,ID)
        return tipoLivro
    }

    async delete(connection,ID) {
        const tipolivroDAO = new tipoLivroDAO
        await tipolivroDAO.deleteDAO(connection,ID)
    }


    async create(connection,dadosTipoLivro) {
        const tipolivroDAO = new tipoLivroDAO
        await tipolivroDAO.createDAO(connection,dadosTipoLivro)
    }

    async update(connection,dadosTipoLivro, ID) {
        const tipolivroDAO = new tipoLivroDAO
        await tipolivroDAO.updateDAO(connection,dadosTipoLivro, ID)
    }

    async filtrar(connection,filtro) {
        const tipolivroDAO = new tipoLivroDAO
        const tipoLivros = await tipolivroDAO.filtrarDAO(connection,filtro)
        return tipoLivros

    }



}
module.exports = TipoLivro