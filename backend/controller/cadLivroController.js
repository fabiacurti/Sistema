const CadLivro = require("../model/entidades/cadLivro.js");
const jsPDF = require('jspdf');
const cadLivro = new CadLivro();
class cadLivroController {
    async getALL(req, res) {

        try {
            const result = await cadLivro.getALL()
            return res.status(200).json(result)
        } catch (error) {
            console.log('erro de busca:' + error);
            res.status(500).json({ error: 'erro de busca' })
        }
        return cadLivro.getALL()

    }



    async getById(req, res) {
        const codigoLivro = req.params.codigoLivro;
        try {
            const result = await cadLivro.getById(codigoLivro)
            if (result) {
                return res.status(200).json(result)
            } else {
                res.status(404).json({ error: 'não encontrado' })
            }

        } catch (error) {
            console.log('erro de busca:' + error);
            res.status(500).json({ error: 'erro de busca' })
        }

    }

    async create(req, res) {
        const livroData = req.body;

        try {
            await cadLivro.create(livroData);
            res.status(201).json({ message: 'registro com successo' })
        } catch (error) {
            console.log('erro ao inserir:' + error);
            res.status(500).json({ error: 'erro ao inserir' })
        }

    }


    async update(req, res) {
        const codigoLivro = req.params.codigoLivro;
        const livroData = req.body;

        try {
            await cadLivro.update(codigoLivro, livroData);
            res.status(201).json({ message: 'registro com successo' })
        } catch (error) {
            console.log('erro ao atualizar:' + error);
            res.status(500).json({ error: 'erro ao atualizar' })
        }

    }

    async delete(req, res) {
        const codigoLivro = req.params.codigoLivro;
        try {
            await cadLivro.delete(codigoLivro)
            res.status(200).json({ message: 'registro deletado' })
        } catch (error) {
            console.log('erro ao deletar', error)
            res.status(500).json({ error: 'erro ao deletar' })
        }
    }

    async generatePDF(req, res) {
        try {
            const livros = await this.getALL();
            const doc = new jsPDF();
            let y = 10;

            livros.forEach(livro => {
                doc.text(`Nome do Livro: ${livro.NomeLivro}`, 10, y);
                doc.text(`Código do Livro: ${livro.codigoLivro}`, 10, y + 10);
                doc.text(`Número de Páginas: ${livro.numeroPagina}`, 10, y + 20);
                doc.text(`Editora: ${livro.editora.nome}`, 10, y + 30);
                doc.text(`Gênero: ${livro.genero.descricao}`, 10, y + 40);
                doc.text(`Data de Publicação: ${livro.dataPublicacao}`, 10, y + 50);
                doc.text('-------------------------------------', 10, y + 60);
                y += 70;
            });

            doc.save('livros_cadastrados.pdf');

            res.status(200).json({ message: 'PDF gerado com sucesso' });
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            res.status(500).json({ error: 'Erro ao gerar PDF' });
        }
    }


}
module.exports = cadLivroController;