const mysql = require('mysql');
const config = require('../../config');
const dbconfing = config.database;
const pool = mysql.createPool(dbconfing);

let query = function(sql,values){
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
            }else{
                connection.query(sql,values,(err,rows)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(rows);
                    }
                    connection.release(()=>{
                        console.log('release');
                    });
                });
            }
        })
    });
}

module.exports={query};