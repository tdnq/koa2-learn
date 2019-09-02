const fs = require('fs');
const {walkFile} = require('./walk-file');

/**
 * 获取sql目录下的文件目录数据
 */

 function getSqlMap(){
     let basePath = __dirname;
     console.log('basePath',basePath);

    //  basePath = basePath.replace(/\\/g,'\/');
    //  console.log('basePathdeal',basePath);
     let pathArr = basePath.split('/');
    //  console.log(3,pathArr);
     pathArr = pathArr.splice(0,pathArr.length-1);
     basePath = pathArr.join('/')+'/sql/';
    //  console.log(basePath);
     
     let fileList = walkFile(basePath,'sql');
    return fileList;
 }
 module.exports = {getSqlMap};