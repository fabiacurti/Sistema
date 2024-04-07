const ReservaLivro = require("../model/entidades/reservaLivro");

const reservaLivro = new ReservaLivro;

class reservaLivroController {

    async getAll(req, res) {
        try {
            const result = await reservaLivro.obterTodos();
            return res.status(200).json(result)
        } catch (error) {
            console.log('Erro ao buscar lista de reserva' + error)
            res.status(500).json({ error: 'Erro ao buscar lista de reserva' })
        }
    }

    async reservar(req,res){
        const reservaLivro = req.body;
        const ID = req.params.ID
        try{
            await reservaLivro.reservar(ID,reservaLivro);
            res.status(201).json({messege:'Reserva realizada com sucesso!'})

        }catch{
            console.log('Erro ao realizar a reserva do livro', error)
            res.status(500).json({error:'Erro ao reservar o livro'})
        }
    }
}

module.exports = reservaLivroController
