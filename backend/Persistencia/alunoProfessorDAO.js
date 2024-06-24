const banco = require("../config/database");

class AlunoProfessorDAO {
    Nome;
    cpf;
    dNascimento;
    email;
    cidade;
    rua;
    telefone;
    cep;
    tipoPessoa;

    constructor(Nome, cpf, dNascimento, Turma, email, cidade, rua, Telefone, Numero, cep, tipoPessoa) {
        this.Nome = Nome,
        this.cpf = cpf,
        this.dNascimento = dNascimento,
        this.Turma = Turma,
        this.email = email,
        this.cidade = cidade,
        this.rua = rua,
        this.Telefone = Telefone,
        this.Numero = Numero,
        this.cep = cep,
        this.tipoPessoa = tipoPessoa
    }

    
    async getAllDAO(connection){
        
        const alunoprofessors = await banco.ExecutaComando(connection,'select * from alunoprofessor');
        return alunoprofessors;
    
    }

    async filtrarDAO (connection,{Nome, TipoPessoa}){
        
        var sql=`select * from alunoprofessor where Nome like '%${Nome}%' and TipoPessoa =?`
           if(TipoPessoa=="Todos"){
                sql=`select * from alunoprofessor where Nome like '%${Nome}%'`
            }
            const alunoprofessors = await banco.ExecutaComando(connection,sql,TipoPessoa);
            
            return alunoprofessors
    }

    async createDAO(connection,dadosAlunoProfessor){
        await banco.ExecutaComandoNonQuery(connection,'insert into alunoprofessor set ?',dadosAlunoProfessor)
    }

    async updateDAO(connection,cpf,dadosAlunoProfessor){
        await banco.ExecutaComando(connection,'update alunoprofessor set ? where cpf= ?',[dadosAlunoProfessor,cpf])
    }

    async deleteDAO (connection,cpf){
        await banco.ExecutaComandoNonQuery(connection,'delete from alunoprofessor where cpf=?',cpf)
    }

}

module.exports=AlunoProfessorDAO;
