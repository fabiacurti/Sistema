const GeneroDAO = require('../../Persistencia/generoDAO.js');

//const banco = new Database()

class Genero {
    
    async obterTodos(connection) {
        const generoDAO = new GeneroDAO;
        const generos = await generoDAO.obterTodosDAO(connection)
        return generos;
    }

    async create(connection,generoData) {
      const generoDAO = new GeneroDAO;
      const resultado = await generoDAO.createDAO(connection,generoData);
      return resultado;
        }
    
      
    async delete(connection,ID) {
        const generoDAO = new GeneroDAO;
        await generoDAO.deleteDAO(connection,ID)
    }

    async update(connection,ID, dadosGenero) {
        const generoDAO = new GeneroDAO;
        await generoDAO.updateDAO(connection,ID, dadosGenero);
        
      }
    

}

module.exports = Genero;
