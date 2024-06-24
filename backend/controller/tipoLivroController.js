const TipoLivro = require("../model/entidades/tipoLivro.js");
const banco = require("../config/database.js");
const tipoLivro = new TipoLivro

class TipoLivroController{


    async getAll(req,res){
        try{
            const connection = await banco.getPool() 
            const result = await tipoLivro.getAll(connection)
            return res.status(200).json(result)
        }catch (error){
            console.log('Erro ao buscar tipo de livro:'+error)
            res.status(500).json({error:'Erro ao buscar tipo de livro!'})
        }
        
        

    }

    async getById(req,res){
        const ID = req.params.ID
        try{
            const connection = await banco.getPool()
            const result = await tipoLivro.getById(connection,ID)
            if(result){
                return res.status(200).json(result)
            }else{
                res.status(404).json({error:'Tipo de livro não encontrado!'})
            } 
        }catch (error){
            console.log('Erro ao buscar tipo de livro:'+error)
            res.status(500).json({error:'Erro ao buscar tipo de livro!'})
        }
        

    }

    async delete(req,res){
        const ID = req.params.ID
        try{
            const connection = await banco.getPool()
            await tipoLivro.delete(connection,ID)
            res.status(200).json({messege:'Tipo de livro deletado com sucesso!'})
        }catch(error){
            console.log('Erro ao deletar o tipo de livro', error)
            res.status(500).json({error:'Erro ao deletar o tipo de livro'})
        }
    }


async create(req, res) {
    const dadosTipoLivro = req.body;
    try {
        const connection = await banco.getPool()
        await tipoLivro.create(connection,dadosTipoLivro);
        res.status(201).json({ message: 'Tipo de livro registrado com sucesso!' });
    } catch (error) {
        console.log('Erro ao inserir o tipo de livro', error);
        res.status(500).json({ error: 'Erro ao inserir o tipo de livro' });
    }
}

    async update(req,res){
        const dadosTipoLivro = req.body;
        const ID = req.params.ID
        try{
            const connection = await banco.getPool()
            await tipoLivro.update(connection,dadosTipoLivro,ID);
            res.status(201).json({messege:'Tipo de livro atualizado com sucesso!'})

        }catch{
            console.log('Erro ao atualizar o tipo de livro', error)
            res.status(500).json({error:'Erro ao atualizar o tipo de livro'})
        }
    }

    async filtrar(req, res) {
        const filtro = req.body;
        try {
            const connection = await banco.getPool()
            const result = await tipoLivro.filtrar(connection,filtro);
            return res.status(200).json(result);
        } catch (error) {
            console.error("Erro ao filtrar tipo de livros:", error);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }
    
}


module.exports = TipoLivroController;