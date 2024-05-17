const banco = require("../database");



class AlunoProfessor {
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

    
    async getAll(){
        const alunoprofessors = await banco.ExecutaComando('select * from alunoprofessor');
        return alunoprofessors;
    }

    async filtrar ({Nome, TipoPessoa}){
        
        var sql=`select * from alunoprofessor where Nome like '%${Nome}%' and TipoPessoa =?`
           if(TipoPessoa=="Todos"){
                sql=`select * from alunoprofessor where Nome like '%${Nome}%'`
            }
            const alunoprofessors =await banco.ExecutaComando(sql,TipoPessoa);
            
            return alunoprofessors
    }

    async create(dadosAlunoProfessor){
        await banco.ExecutaComandoNonQuery('insert into alunoprofessor set ?',dadosAlunoProfessor)
    }

    async update(cpf,dadosAlunoProfessor){
        await banco.ExecutaComando('update alunoprofessor set ? where cpf= ?',[dadosAlunoProfessor,cpf])
    }

    async delete (cpf){
        await banco.ExecutaComandoNonQuery('delete from alunoprofessor where cpf=?',[cpf])
    }

}

module.exports=AlunoProfessor;
