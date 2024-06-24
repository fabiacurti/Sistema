const mysql = require('mysql2/promise');

class Database {
    dbHost
    dbUser
    dbPass
    dbDatabase
    dbPool
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
    constructor() {
        this.dbHost = process.env.DB_HOST
        this.dbUser = process.env.DB_USER
        this.dbPass = process.env.DB_PASSWORD
        this.dbDatabase = process.env.DB_DATABASE
        if (! Database.#constructorEnabled){
            throw new Error('Use Database.instance para criar uma instácia')
        } 
        this.dbPool = mysql.createPool({
            host:process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });
        
    }
    
    
    
    async getPool() {
        
        return await Database.instance.dbPool.getConnection();
        
    }

    async ExecutaComando(connection, sql, params = []) {
       console.log(sql,params)
        try {
            
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

    async ExecutaComandoNonQuery(connection,sql,params = []) {
        console.log(sql,params)
        try {
            const [results] = await connection.query(sql,params);
            console.log(sql,params)
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
Database.getPool
const banco = Database.instance
//console.log(banco.getPool, Database.instance)


module.exports = banco; 
 


