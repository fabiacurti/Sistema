const Database = require("../database");

const banco = new Database()
class cadLivro {
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

   async getALL() {
      const query = `
         SELECT
            cadlivro.nomeLivro,
            cadlivro.cod,
            cadlivro.numeroPagina,
            editoras.id as editora_id,
            editoras.nome as editora,
            generos.id AS genero_id,
            generos.descricao AS genero,
            cadlivro.dataPublicacao
         FROM
            cadlivro
         INNER JOIN
            generos ON cadlivro.genero = generos.descricao
         INNER JOIN
            editoras ON cadlivro.editora = editoras.nome;
      `;
   
      const livros = await banco.ExecutaComando(query);
   
      const livrosFormatados = livros.map(livro => ({
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
      }));
   
      return livrosFormatados;
   }

   async create(dadosLivro) {
      await banco.ExecutaComandoNonQuery('insert into cadlivro set ?', dadosLivro)
   }

   async update(cod, dadosLivro) {
      await banco.ExecutaComando('update cadlivro set ? where cod=?', [dadosLivro, cod])
   }

   async getById(cod) {
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
      const result = await banco.ExecutaComando(query, [cod]);
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



   async delete(cod) {
      await banco.ExecutaComandoNonQuery('delete from cadlivro where cod=?', [cod])

   }
}

module.exports = cadLivro