const Reserva = require("../model/entidades/reserva.js");
const banco = require("../config/database.js");

const reserva =new Reserva();

class ReservaController{
    async getAllByIDProf(req,res){
       try {
            const connection = await banco.getPool()
            const result = await reserva.getAllByIDProf(connection)
            return res.status(200).json(result)
       } catch (error) {
        console.log('Erro ao buscar Reservas:'+error)
        res.status(500).json({error:'Erro ao buscar Reservas'})

       }
        
        return reserva.getAllByIDProf()
    }

    async filtrar (req,res){
        const filtro =req.body;
        try {
            const connection = await banco.getPool()
            const result =await reserva.filtrar(connection,filtro)
            return res.status(200).json(result);
        } catch (error) {
            console.log(error)
        }
    }

    async create(req,res){
        const reservaData =req.body;
        try {
            const connection = await banco.getPool()
            await reserva.create(connection,reservaData);
            res.status(200).json({message:'Registro cadastrado com sucesso'})
            
        } catch (error) {
            
            console.log('Erro ao cadastrar reserva:'+ error)
            res.status(500).json({error:'Erro ao cadastrar reserva'})
            

        }
        console.log(reservaData)
    }
    
    async update(req,res){
        const reservaData =req.body;
        const id_Res =req.params.id_Res;
        try {
            const connection = await banco.getPool()
            await reserva.update(connection,reservaData ,id_Res);
            res.status(201).json({message:'Registro cadastrado com sucesso'})
        } catch (error) {
            console.log('Erro ao atualizar Alunos & Professores:'+error)
            res.status(500).json({error:'Erro ao atualizar Alunos & Professores'})
        }
    }

    async delete(req, res){
        const id_Res = req.params;
        try {
            const connection = await banco.getPool()
            await reserva.delete(connection,id_Res.id);
            res.status(200).json({message:'Registro deletado com sucesso'})
        } catch (error) {
            console.log('Erro ao deletar reservar', error)
            res.status(500).json({error:'Erro ao tentar cancelar a reserva'})
        }
    }
}
module.exports=ReservaController;