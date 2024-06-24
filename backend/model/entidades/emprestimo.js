const EmprestimoDAO = require("../../Persistencia/emprestimoDAO.js") 
//const banco = new Database();

class Emprestimo {
    constructor(ID, ID_Livro, ID_AlunoProf, dEmprestimo, dDevolucao) {
        this.ID = ID;
        this.ID_Livro = ID_Livro;
        this.ID_AlunoProf = ID_AlunoProf;
        this.dEmprestimo = dEmprestimo;
        this.dDevolucao = dDevolucao;
    }

    async getAll(connection) {
        const emprestimoDAO = new EmprestimoDAO
        const emprestimos = await emprestimoDAO.getAllDAO(connection);
        return emprestimos;
    }

    async getById(connection,ID) {
        const emprestimoDAO = new EmprestimoDAO
        const emprestimo = await emprestimoDAO.getByIdDAO(connection,ID);
        return emprestimo;
    }

    async delete(connection,ID) {
        const emprestimoDAO = new EmprestimoDAO
        await emprestimoDAO.deleteDAO(connection,ID);
    }

    async create(connection,emprestimoData) {
        const emprestimoDAO = new EmprestimoDAO
        await emprestimoDAO.createDAO(connection,emprestimoData);
    }

    async update(connection,emprestimoData,ID) {
        const emprestimoDAO = new EmprestimoDAO
        await emprestimoDAO.updateDAO(connection,emprestimoData,ID);
    }

    async filtrar(connection,filtro) {
        const emprestimoDAO = new EmprestimoDAO
        const emprestimos = await emprestimoDAO.filtrarDAO(connection,filtro);
        return emprestimos;
    }
}

module.exports = Emprestimo;
