const banco = require("../config/database.js");//Database

//const banco = new Database();

class EditorasDAO {
    id;
    status;
    descricao;

    constructor(id, status, descricao) {
        this.id = id;
        this.status = status;
        this.descricao = descricao;
    }

    async getAllDAO(connection) {
        const editoras = await banco.ExecutaComando(connection,'select * from editoras');
        return editoras;
    }

    async getByIdDAO(connection,id){
        const result = await banco.ExecutaComando(connection,'SELECT * FROM editoras WHERE id = ?',[id])
        const editoras = result[0];
        return editoras;
    }

    async createDAO(connection,dadoseditora) {
        await banco.ExecutaComandoNonQuery(connection,'insert into editoras set ?', dadoseditora)
    }

    async updateDAO(connection,id, dadoseditora) {
        await banco.ExecutaComando(connection,'update editoras set ? where id=?', [dadoseditora, id])
    }

    async deleteDAO(connection,id) { 
        await banco.ExecutaComandoNonQuery(connection,'delete from editoras where id=?', [id])
    }

    async filtrarDAO (connection,{Nome}){
        var sql=`select * from editoras where Nome like '%${Nome}%' `
            if(Nome==""){
                sql=`select * from editoras where Nome like '%${Nome}%'`
            }
            const editora =await banco.ExecutaComando(connection,sql);
            return editora
    }

    

    
}

module.exports = EditorasDAO;
