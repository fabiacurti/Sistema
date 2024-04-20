const mysql = require('mysql2/promise');

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'adm123',
            database: 'agencia'
        });
    }

    async ExecutaComando(sql, params = []) {
        let connection;
        try {
            connection = await this.pool.getConnection();
            const [rows] = await connection.query(sql, params);
            return rows;
        } catch (error) {
            console.error('Erro ao executar comando:', error);
            throw error;
        } finally {
            if (connection) {
                connection.release();
            }
        }
    }

    async ExecutaComandoNonQuery(sql, params = []) {
        let connection;
        try {
            connection = await this.pool.getConnection();
            const [results] = await connection.query(sql, params);
            return results.affectedRows;
        } catch (error) {
            console.error('Erro ao executar comando non-query:', error);
            throw error;
        } finally {
            if (connection) {
                connection.release();
            }
        }
    }
}

module.exports = Database;
