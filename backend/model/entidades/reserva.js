const ReservaDAO = require("../../Persistencia/reservaDAO.js");

//const banco= new Database()
class Reserva {
    
    
    async getAllByIDProf(connection){
        const reservaDAO = new ReservaDAO
        const resultado = await reservaDAO.getAllByIDProfDAO(connection); 
        
        return resultado;
    }
    

    async filtrar (connection,filtro){
            const reservaDAO = new ReservaDAO 
            const reserva =await reservaDAO.filtrarDAO(connection,filtro);
            return reserva
    }

    

    async create(connection,reservaData) {
        const reservaDAO = new ReservaDAO
        await reservaDAO.createDAO(connection,reservaData);
    }
    
    async update(connection,reservaData ,id_Res){
        const reservaDAO = new ReservaDAO
        await reservaDAO.updateDAO(connection,reservaData ,id_Res)
    }

    async delete (connection, id_Res){
        const reservaDAO = new ReservaDAO
        await reservaDAO.deleteDAO(connection,id_Res)
    }

}

module.exports=Reserva;