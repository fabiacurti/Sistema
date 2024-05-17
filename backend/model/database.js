const mysql = require('mysql2/promise');

class Database {
    #dbHost
    #dbUser
    #dbPass
    #dbDatabase
    #dbPool
    static #constructorEnabled = false
    static #instance 
    static get instance(){
        
        if (!this.#instance){
            this.#constructorEnabled = true
            this.#instance = new this()
            this.#constructorEnabled = false  
        }
            
            //    this.#instance = new this(privatConstructor)
          
        return this.#instance
    } 
    constructor(

        //key,
        dbHost = process.env.DB_HOST,
        dbUser = process.env.DB_USER,
        dbPass = process.env.DB_PASSWORD,
        dbDatabase = process.env.DB_DATABASE,
    ) {
        /*if(key !== privatConstructor){
            throw new Error('Use Database.instance para criar uma instácia')
        }*/
        if (! Database.#constructorEnabled){
            throw new Error('Use Database.instance para criar uma instácia')
        }
        this.#dbHost = dbHost,
        this.#dbUser = dbUser,
        this.#dbPass = dbPass,
        this.#dbDatabase = dbDatabase,
        this.#dbPool = mysql.createPool({
            host: this.#dbHost,
            user: this.#dbUser,
            password: this.#dbPass,
            database: this.#dbDatabase
        });
    }

    async ExecutaComando(sql, params = []) {
        let connection;
        try {
            connection = await this.#dbPool.getConnection();
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
            connection = await this.#dbPool.getConnection();
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
    static 
    

}

const banco = Database.instance


module.exports = banco; 

//module.exports = Database;
