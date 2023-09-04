import ClienteBase from "../Repository/ClienteBase";
export default class Cliente {

    #cpf;
    #nome;
    #endereco;
    #bairro;
    #cidade;
    #uf;
    #telefone;
    #email;

    constructor(cpf, nome, endereco, bairro, cidade, uf, telefone, email) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#telefone = telefone;
        this.#email = email;
    }

    get cpf() {
        this.#cpf;
    }

    set cpf(novoCpf) {

        this.#cpf = novoCpf;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get endereco() {
        this.#endereco;
    }

    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    get bairro() {

        this.#bairro;
    }

    set bairro(novoBairro) {
        this.#bairro = novoBairro;
    }

    get cidade() {
        this.#cidade;
    }

    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    }

    get uf() {
        this.#uf;
    }

    set uf(novoUF) {
        this.#uf = novoUF;
    }

    get telefone() {
        this.#telefone;
    }

    set telefone(novoTelefone) {
        this.#telefone = novoTelefone;
    }

    get email() {
        this.#email;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    toJSON() {
        return {
            "cpf": this.#cpf,
            "nome": this.#nome,
            "endereco": this.#endereco,
            "bairro": this.#bairro,
            "cidade": this.#cidade,
            "uf": this.#uf,
            "telefone": this.#telefone,
            "email": this.#email

        }
    }


    async gravar() {
        const clienteDB = new ClienteBase();

        await clienteDB.incluir(this);
    }

    async atualizar() {
        const clienteDB = new ClienteBase();
        await clienteDB.atualizar(this);
    }
    async removerDado(){
        const clienteDB = new ClienteBase();
        await clienteDB.excluir(this);

    }
    async consultar(termo){
        const clienteDB = new ClienteBase();
        const clientes = await clienteDB.consultar(termo);
        return clientes;
    }

    async consultarCPF(cpf){
        const clienteDB = new ClienteBase();
        const clientes = await clienteDB.consultarCPF(cpf);
        return clientes;
    }

}