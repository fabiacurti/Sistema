//const banco = require("../../config/database.js");//Database
const AutorDAO=require("../../Persistencia/autorDAO.js")
//const banco = new Database()

class Autor {

    async getAll(connection) {
        const autorDAO = new AutorDAO
        const autores = await autorDAO.getAllDAO(connection)
        return autores
    }

    async getById(connection,ID) {
        const autorDAO = new AutorDAO
        const autores = await autorDAO.getByIdDAO(connection,[ID])
        return autores
    }

    async delete(connection,ID) {
        const autorDAO = new AutorDAO
        await autorDAO.deleteDAO(connection,[ID])
    }


    async create(connection,dadosAutor) {
        const autorDAO = new AutorDAO
        await autorDAO.createDAO(connection, dadosAutor)
    }

    async update(connection,ID, dadosAutor) {
        const autorDAO = new AutorDAO
        await autorDAO.updateDAO(connection, [dadosAutor, ID])
    }

    async filtrar(connection,filtro) {
        const autorDAO = new AutorDAO
        const autores = await autorDAO.filtrarDAO(connection,filtro)
        return autores

    }

}
module.exports = Autor