const Database = require('../database');

const banco = new Database()

class reservaLivro {

    async obterTodos() {
        const reservas = await banco.ExecutaComando('select * from emprestimo where isReservado=false');
        return reservas;
    }

    async reservar(ID, dadosEmprestimo) {
        await banco.ExecutaComando('update emprestimo set isReservado=true where id=?', [dadosEmprestimo, ID])
    }
}

module.exports = reservaLivro;


