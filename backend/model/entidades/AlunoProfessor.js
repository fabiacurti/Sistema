//const banco = require("../../config/database");
const AlunoProfDAO =  require("../../Persistencia/alunoProfessorDAO.js")

class AlunoProfessor {
    
    async getAll(connection){
        const alunoProfDAO = new AlunoProfDAO()
        const alunoprofessors = await alunoProfDAO.getAllDAO(connection);
       //const alunoprofessors = await banco.ExecutaComando('select * from alunoprofessor');
        return alunoprofessors;
    }

    async filtrar (connection,filtro){
            const alunoProfDAO = new AlunoProfDAO()
            const alunoprofessors =await alunoProfDAO.filtrarDAO(connection,filtro);
            return alunoprofessors
    }

    async create(connection,dadosAlunoProfessor){
        const alunoProfDAO = new AlunoProfDAO()
        await alunoProfDAO.createDAO(connection,dadosAlunoProfessor)

        //await banco.ExecutaComandoNonQuery('insert into alunoprofessor set ?',dadosAlunoProfessor)
    }

    async update(connection,cpf,dadosAlunoProfessor){
        const alunoProfDAO = new AlunoProfDAO()
        await alunoProfDAO.updateDAO(connection,cpf,dadosAlunoProfessor)
    }

    async delete (connection,cpf){
        const alunoProfDAO = new AlunoProfDAO()
        await alunoProfDAO.deleteDAO(connection,cpf)
    }

}

module.exports=AlunoProfessor;
