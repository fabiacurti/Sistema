const EditroaDAO = require("../../Persistencia/editorasDAO.js");//Database

//const banco = new Database();

class Editoras {
    
    async getAll(connection) {
        const editroaDAO = new EditroaDAO;
        const editoras = await editroaDAO.getAllDAO(connection);
        return editoras;
    }

    async getById(connection,id){
        const editroaDAO = new EditroaDAO;
        const result = await editroaDAO.getByIdDAO(connection,id);
        return result;
    }

    async create(connection,editorData) {
        const editroaDAO = new EditroaDAO;
        await editroaDAO.createDAO(connection,editorData)
    }

    async update(connection,id,editorData) {
        const editroaDAO = new EditroaDAO;
        await editroaDAO.updateDAO(connection,id,editorData);
    }

    async delete(connection,id) { 
        const editroaDAO = new EditroaDAO;
        await editroaDAO.deleteDAO(connection,id)
    }

    async filtrar (connection,filtro){
            const editroaDAO = new EditroaDAO;
            const editora =await editroaDAO.filtrarDAO(connection,filtro);
            return editora
    }

    

    
}

module.exports = Editoras;
