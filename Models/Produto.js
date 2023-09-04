export default class Produto {
    #codigo;
    #descricao;
    #qtdEstoque;

    constructor(codigo, descricao, qtdEstoque) {
        this.#codigo = codigo;
        this.#descricao = descricao;
        this.#qtdEstoque = qtdEstoque;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }

    get qtdEstoque() {
        return this.#qtdEstoque;
    }

    set qtdEstoque(novaQtdEstoque) {
        this.#qtdEstoque = novaQtdEstoque;
    }

    toJSON() {
        return {
            "codigo": this.#codigo,
            "descricao": this.#descricao,
            "quantidade_estoque": this.#qtdEstoque
        };
    }
}
