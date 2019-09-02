const config=require('../../config');
const  mysql = require('mysql');

const pool=mysql.createPool({
    host:config.database.host,
    user:config.database.user,
    password:config.database.password,
    database:config.database.database
});
//查询数据库
let query = function( sql, values ) {

    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          resolve( err );
        } else {
          connection.query(sql, values, ( err, rows) => {
  
            if ( err ) {
              reject( err );
            } else {
              resolve( rows );
            }
            connection.release();
          });
        }
      });
    });
  
  }
//通过id查找数据

//插入数据
let insertData = function( table, values ) {
    let _sql = "INSERT INTO ?? SET ?";
    return query( _sql, [ table, values ] );
  };

  let select = function( table, keys ) {
    let  _sql =  "SELECT ?? FROM ?? ";
    return query( _sql, [ keys, table ] );
  };

  module.exports={
      query,
      insertData,
      select
  }