const banco = require("../config/database.js");//Database

//const banco = new Database()
class cadLivroDAO {
   nomeLivro;
   cod;
   id;
   numeroPagina;
   editora;
   genero;
   dataPublicacao;
   constructor(nomeLivro, cod, id,numeroPagina, editora, genero, dataPublicacao) {
      this.nomeLivro = nomeLivro,
         this.cod = cod,
         this.id = id,
         this.numeroPagina = numeroPagina,
         this.editora = editora,
         this.genero = genero,
         this.dataPublicacao = dataPublicacao
   }

   async getALLDAO(connection) {
      const sql = `
         SELECT
            cadlivro.nomeLivro,
            cadlivro.id,
            cadlivro.cod,
            cadlivro.numeroPagina,
            cadlivro.editora,
            cadlivro.genero,
            cadlivro.dataPublicacao
         FROM
            cadlivro
         
      `;
   
      const livros = await banco.ExecutaComando(connection,sql);
   
      const livrosFormatados = livros.map(livro => ({
         id:livro.id,
         nomeLivro: livro.nomeLivro,
         cod: livro.cod,
         numeroPagina: livro.numeroPagina,
         editora: livro.editora,
         genero: livro.genero,
         dataPublicacao: livro.dataPublicacao
      }));
   
      return livrosFormatados;
   }

   async createDAO(connection,dadosLivro) {
      await banco.ExecutaComandoNonQuery(connection,'insert into cadlivro set ?', dadosLivro)
   }

   async updateDAO(connection,cod, dadosLivro) {
      await banco.ExecutaComando(connection,'update cadlivro set ? where cod=?', [dadosLivro, cod])
   }

   async getByIdDAO(connection,cod) {
      const query = `
          SELECT
              cadlivro.nomeLivro,
              cadlivro.cod,
              cadlivro.numeroPagina,
              editoras.id as editora_id,
              editoras.nome AS editora,
              generos.id AS genero_id,
              generos.descricao AS genero,
              cadlivro.dataPublicacao
          FROM
              cadlivro
          INNER JOIN
              generos ON cadlivro.genero = generos.descricao
          INNER JOIN
              editoras ON cadlivro.editora = editoras.nome
          WHERE
              cadlivro.cod
      `;
      const result = await banco.ExecutaComando(connection,query, [cod]);
      const livro = result[0]
      const livrosFormatados = {
         nomeLivro: livro.nomeLivro,
         cod: livro.cod,
         numeroPagina: livro.numeroPagina,
         editora: {
            cod: livro.editora_cod,
            nome: livro.editora 
         }, 
         genero: {
            cod: livro.genero_cod,
            descricao: livro.genero
         },
         dataPublicacao: livro.dataPublicacao
      };
   
      return livrosFormatados;
   }

   async filtrarDAO (connection,{nomeLivro, genero}){
        
      var sql=`select * from cadlivro where nomeLivro like '%${nomeLivro}%' and genero = ?   `
         if(genero=="Todos"){
              sql=`select * from cadlivro where nomeLivro like '%${nomeLivro}%'`
          }
          const cadlivro =await banco.ExecutaComando(connection,sql,genero);
          
          return cadlivro
  }

   async deleteDAO(connection,id) {
      await banco.ExecutaComandoNonQuery(connection,'delete from cadlivro where id=?', [id])

   }
}

module.exports = cadLivroDAO