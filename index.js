import Cliente from "./Models/Cliente.js";

let objcliente = new Cliente(
    '487.913.458.99',
    'Fábia',
    'rua 6',
    'Barvelly  Hills',
    'Campinas',
    'SP',
    '19 32463625',
    'fcurti1998@gmail.com')

objcliente.nome = 'Joana da Silva ';

objcliente.gravar().then(()=>{
    console.log("O cliente foi gravado com sucesso!");
})