const Genero = require("../model/entidades/genero");
const banco = require("../config/database.js");
const genero = new Genero;

class GeneroController {

    async obterTodos(req, res) {
        try {
            const connection = await banco.getPool()
            const result = await genero.obterTodos(connection);
            return res.status(200).json(result);
        } catch (error) {
            console.error('Erro ao buscar gêneros:', error);
            res.status(500).json({ error: 'Erro ao buscar gêneros!' });
        }
    }

    async create(req, res) {
        const generoData = req.body;
        try {
            const connection = await banco.getPool()
            console.log('Dados recebidos:', generoData);
            await genero.create(connection,generoData);
            res.status(201).json({ success: true, message: 'Gênero cadastrado com sucesso.' });
        } catch (error) {
            console.error('Erro ao cadastrar gênero:', error.message);
            res.status(500).json({ success: false, message: 'Erro ao cadastrar gênero.' });
        }
    }
    

    async delete(req, res) {
        const ID = req.params.ID
        try {
            const connection = await banco.getPool()
            await genero.delete(connection,ID)
            res.status(200).json({ messege: 'Genero deletado com sucesso!' })
        } catch (error) {
            console.log('Erro ao deletar o genero', error)
            res.status(500).json({ error: 'Erro ao deletar o genero' })
        }
    }

    async update(req, res) {
        const generoData = req.body;
        const ID = req.params.ID
        try {
            const connection = await banco.getPool()
            await genero.update(connection,ID, generoData);
            res.status(201).json({ message: 'Genero atualizado com sucesso!' })
        } catch (error) {
            console.log('Erro ao atualizar o Genero', error)
            res.status(500).json({ error: 'Erro ao atualizar o Genero' })
        }
    }
    
}

module.exports = GeneroController;
