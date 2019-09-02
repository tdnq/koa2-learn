const fs = require('fs');

/**
 * 遍历目录下文件目录
 */

 const walkFile = function(pathResolve,mime){
     let files = fs.readdirSync(pathResolve);
     let fileList = {};
     for(let [i,item] of files.entries()){
         let itemArr = item.split('.');
         let itemMime = (itemArr.length>1)? itemArr[itemArr.length-1]:'undefined';
         if(mime === itemMime){
             fileList[item] = pathResolve+item;

         }
     }
    //  console.log(fileList);
     return fileList;
 }

 module.exports={walkFile};