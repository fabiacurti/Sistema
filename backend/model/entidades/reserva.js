const banco = require("../database");

//const banco= new Database()
class Reserva {
    id_Res;
    id_AlunoProf;
    id_Livro;
    Data_Reserva;
    Data_Devolucao;
    Status_Reserva;

    constructor(id_Res, id_AlunoProf, id_Livro, Data_Reserva, Data_Devolucao, Status_Reserva) {
        this.id_Res = id_Res,
        this.id_AlunoProf = id_AlunoProf,
        this.id_Livro = id_Livro,
        this.Data_Reserva = Data_Reserva,
        this.Data_Devolucao = Data_Devolucao,
        this.Status_Reserva = Status_Reserva
    }

    
    async getAllByIDProf(){
        
        const query = `
            SELECT 
                reserva.*, 
                alunoprofessor.*,  
                cadLivro.*
            FROM 
                reserva
            JOIN 
                alunoprofessor ON reserva.id_AlunoProf = alunoprofessor.cpf
            JOIN 
                cadlivro ON cadlivro.id = reserva.id_Livro
          `
        
        const resultado = await banco.ExecutaComando(query); 
        
        return resultado;
    }
    

    async filtrar ({nomeLivro, tipoPessoa}){
        var sql=`SELECT *
        FROM reserva r 
        JOIN cadLivro cl ON r.id_Livro = cl.id
        JOIN alunoprofessor ap on r.id_AlunoProf = ap.cpf
        WHERE cl.nomeLivro LIKE '%${nomeLivro}%';`
            /*if(tipoPessoa=="Todos"){
                sql=`select * from reserva where Nome like '%${nomeLivro}%'`
            }*/
            const reserva =await banco.ExecutaComando(sql,tipoPessoa);

            return reserva
    }

    

    async create(dadosReserva) {
        const { id_AlunoProf, id_Livro, Data_Reserva, Data_Devolucao, Status_Reserva } = dadosReserva;
        const valores = [id_AlunoProf, id_Livro, Data_Reserva, Data_Devolucao, Status_Reserva];
    
        await banco.ExecutaComandoNonQuery('INSERT INTO reserva (id_AlunoProf, id_Livro, Data_Reserva, Data_Devolução, Status_Reserva) VALUES (?, ?, ?, ?, ?)', valores);
    }
    
    async update(id_Res,dadosReserva){
        await banco.ExecutaComando('update reserva set ? where cpf= ?',[dadosReserva,id_Res])
    }

    async delete (id_Res){
        await banco.ExecutaComandoNonQuery('delete from reserva where id_Res=?',[id_Res])
    }

}

module.exports=Reserva;