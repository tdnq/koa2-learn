const fs = require('fs');
const {getSqlMap} = require("./get-sql-map");

let sqlContentMap = {};

/**
 * 读取sql文件内容
 * @return {string} 
 */

 function getSqlContent(fileName,path){
     let content = fs.readFileSync(path,'binary');
    //  console.log(content);
     sqlContentMap[fileName] = content;
 }

 /**
  * 封装所有sql文件脚本内容
  */

  function getSqlContentMap(){
      let sqlMap = getSqlMap();
      for (let key in sqlMap){
          getSqlContent(key,sqlMap[key]);

      }
      return(sqlContentMap);
  }
  
  module.exports = {getSqlContentMap};