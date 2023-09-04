import mysql from 'mysql2/promise';

let conexao = null;

export default async function conectar() {
    if (conexao && conexao.state !== 'disconnected') {
        return conexao;
    }

    try {
        conexao = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "backend"
        });
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        return conexao;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error; 
    }
}
