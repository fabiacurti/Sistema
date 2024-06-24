const AlunoProfessor = require("../model/entidades/AlunoProfessor.js");
const banco = require("../config/database.js");
const alunoprofessor =new AlunoProfessor();

class AlunoProfessorController{
    async getAll(req,res){
        
       try { 
            //console.log(banco)
            const connection = await banco.getPool()
            console.log(connection.query)
            const result = await alunoprofessor.getAll(connection);
            return res.status(200).json(result);
       } catch (error) {
        console.log('Erro ao buscar Alunos & Professores:'+error)
        res.status(500).json({error:'Erro ao buscar aluno e professores'})

       }
        
        return alunoprofessor.getAll()
    }

    async filtrar (req,res){
        const filtro =req.body;
        
        try {
            const connection = await banco.getPool()
            const result =await alunoprofessor.filtrar(connection,filtro);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error)
        }
    }

    async create(req,res){
        const alunoprofessorData =req.body;
        
        try {
            const connection = await banco.getPool()
            await alunoprofessor.create(connection,alunoprofessorData);
            res.status(201).json({message:'Registro cadastrado com sucesso'})
        } catch (error) {
            console.log('Erro ao cadastrar Alunos & Professores:'+error)
            res.status(500).json({error:'Erro ao cadastrar aluno e professores'})
        }
    }
    
    async update(req,res){
        const alunoprofessorData =req.body;
        const cpf =req.params.cpf;
        
        try {
            const connection = await banco.getPool()
            await alunoprofessor.update(connection,cpf,alunoprofessorData);
            res.status(201).json({message:'Registro cadastrado com sucesso'})
        } catch (error) {
            console.log('Erro ao atualizar Alunos & Professores:'+error)
            res.status(500).json({error:'Erro ao atualizar Alunos & Professores'})
        }
    }

    async delete(req, res){
        const cpf = req.params.cpf;
        
        try {
            const connection = await banco.getPool()
            await alunoprofessor.delete(connection,cpf);
            res.status(200).json({message:'Registro deletado com sucesso'})
        } catch (error) {
            console.log('Erro ao deletar aluno e professor', error)
            res.status(500).json({error:'Erro ao deletar aluno e professor'})
        }
    }
}
module.exports=AlunoProfessorController;