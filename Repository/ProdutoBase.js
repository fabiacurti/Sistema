import Produto from '../Models/Produto.js';
import conectar from '../Repository/Conexao.js';

export default class ProdutoBase {

    async incluir(produto) {
        if (produto instanceof Produto) {
            try {
                const conexao = await conectar();
                const sql = 'INSERT INTO produtos()VALUES()'
                const valores=[produto.codigo,produto.descricao,produto.qtdEstoque];
                await conexao.query(sql,valores);
                await conexao.end();
                console.log("Produto cadastrado com sucesso");
            }catch(error){
                console.log('Erro ao incluir o produto',error);
            }
        }
    }
    

}