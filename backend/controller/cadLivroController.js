const CadLivro = require("../model/entidades/cadLivro.js");
const banco = require("../config/database.js");
const cadLivro = new CadLivro()

class cadLivroController{
    async getALL(req,res){

        try{
            const connection = await banco.getPool()
            const result = await cadLivro.getALL(connection)
            return res.status(200).json(result)
        }catch (error){
            console.log('erro de busca:'+error);
            res.status(500).json({error: 'erro de busca'})
        }
        return cadLivro.getALL()

    }
    


    async getById(req,res){
        const cod =req.params.cod;
        try{
            const connection = await banco.getPool()
            const result = await cadLivro.getById(connection,cod)
            if(result){
                return res.status(200).json(result)
            }else{
                res.status(404).json({error:'não encontrado'})
            }

        }catch (error){
            console.log('erro de busca:'+error);
            res.status(500).json({error: 'erro de busca'})
        }

    }

    async create(req,res){
        const livroData =req.body;

        try{
            const connection = await banco.getPool()
            await cadLivro.create(connection,livroData);
            res.status(201).json({message:'registro com successo'})
        } catch (error) {
            console.log('erro ao inserir:'+error);
            res.status(500).json({error:'erro ao inserir'})
        }

    }


    async update(req,res){
        const cod =req.params.cod;
        const livroData =req.body;

        try{
            const connection = await banco.getPool()
            await cadLivro.update(connection,cod,livroData);
            res.status(201).json({message:'registro com successo'})
        } catch (error) {
            console.log('erro ao atualizar:'+error);
            res.status(500).json({error:'erro ao atualizar'})
        }

    }

    async delete (req,res){
        const id = req.params.id; //params
        try {
            const connection = await banco.getPool()
            await cadLivro.delete(connection,id)
            res.status(200).json({message:'registro deletado'})
        } catch (error) {
            console.log('erro ao deletar', error)
            res.status(500).json({error:'erro ao deletar'})
        }
    }

    async filtrar(req, res) {
        const filtro = req.body;
        try {
            const connection = await banco.getPool()
            const result = await cadLivro.filtrar(connection,filtro);
            return res.status(200).json(result);
        } catch (error) {
            console.error("Erro ao filtrar autores:", error);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

}
module.exports = cadLivroController;