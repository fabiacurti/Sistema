import Cliente from "./Models/Cliente.js";

let objcliente = new Cliente(
    '111111111',
    'Fábia',
    'rua 6',
    'Barvelly  Hills',
    'Campinas',
    'SP',
    '1932463625',
    'fcurti1998@gmail.com')



objcliente.gravar().then(()=>{
    console.log("O cliente foi gravado com sucesso!");
})