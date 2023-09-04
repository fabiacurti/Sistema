import Cliente from "./Models/Cliente.js";

let objcliente = new Cliente(
    '48791345899',
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