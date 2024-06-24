const banco = require("../../config/database");//Database
const cadLivroDAO = require("../../Persistencia/cadLivroDAO.js")
//const banco = new Database()
class cadLivro {
   
   async getALL(connection) {
      
      const cadlivroDAO = new cadLivroDAO;
      const livros = await cadlivroDAO.getALLDAO(connection);
      return livros
      
   }

   async create(connection,dadosLivro) {
      const cadlivroDAO = new cadLivroDAO;
      await cadlivroDAO.createDAO(connection,dadosLivro);
   }

   async update(connection,cod, dadosLivro) {
      const cadlivroDAO = new cadLivroDAO;
      await cadlivroDAO.updateDAO(connection,cod, dadosLivro)
   }

   async getById(connection,cod) {
      const cadlivroDAO = new cadLivroDAO;
      const result = await cadlivroDAO.getByIdDAO(connection,cod);
      
      return result;
   }

   async filtrar (connection,filtro){
      const cadlivroDAO = new cadLivroDAO;
      const cadlivro =await cadlivroDAO.filtrarDAO(connection,filtro);    
      return cadlivro
  }

   async delete(connection,id) {
      const cadlivroDAO = new cadLivroDAO;
      await cadlivroDAO.deleteDAO(connection,id)

   }
}

module.exports = cadLivro