const inspect = require('util').inspect;
const path = require('path');
const of =require('os');
const fs =require('fs');
const Busbuy = require('busboy');

//同步创建文件目录
//@param {string} dirname 目录绝对地址
//@ return {boolean} 创建结果目录

function mkdirsSync(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

//获取文件后缀名
//return {string}  文件后缀名

function getSuffixName(fileName){
    let nameList = fileName.split('.');
    return nameList[nameList.length-1];
}

//上传文件
//@param {object} ctx       koa上下文
//@param {object} options 文件上传参数 fileType文件类型，path 文件存放路径
//@return {prominse}

function uploadFile (ctx,options){
    let req = ctx.req;
    let res = ctx.res;
    let busboy = new Busboy({headers: req.headers});
    //获取类型
    let fileType = options.fileType||'common';
    let filePath = path.join(options.path,fileType);
    let mkdirResult = mkdirsSync(filePath);
    return new Promise((resolve,reject)=>{
        console.log('uploading...');
        let result = {
            success: false,
            formData : {}
        };
        //解析请求文件事件
        busboy.on('file',function(fieldname,file,fileName,encoding,mimetype){
            let fileName = Math.random().toString(16).substr(2)+'.'+getSuffixName(fileName);
            let _uploadFilePath = path.join(filePath,fieldname);
            let saveTo = path.join(_uploadFilePath);
            //文件保存到制定路径；
            file.pipe(fs.createWriteStream(saveTo));
            //文件写入事件结束；
            file.on('end',function(){
                result.success=true;
                result.message = 'load success';
                console.log('upload success');
                resolve(result);
            });
        });
        // 解析表单中其他字段信息；
        busboy.on('field',function(fieldname,val,fieldnameTruncated,valTruncated,encoding,mimetype){
            console.log( `表单字段数据[`+fieldname+']:value:' + inspect(val));
            result.formData[fileName] = inspect(val);
        });
        //解析结束事件
        busboy.on('finish',function(){
            console.log('upload end');
            resolve(result);
        });
        busboy.on('error',function(err){
            console.log('upload err');
            resolve(result);
        });
        req.pipe(busboy);
    });
}
module.exports = {
    uploadFile
};