
const dbUtils = require('../utils/db-util');

/**
 * 数据库创建用户
 * @parpm {object} 用户数据模型
 * @return {object} mysql执行结果
 */
 const user={
     async create(model){
         let result = await dbUtils.insertData('user',model);
         return result;
     },
     /**
      * 查找一个存在用户的数据
      * @param {object} options 查找条件参数
      * @return {objec||null} 查找结果
      */
     async getExistOne(options){
         let _sql=`SELECT * FROM user
            WHERE email="${options.email}" OR name="${options.name}"
            LIMIT 1
         `;
         console.log(_sql);
         let result = await dbUtils.query(_sql);
         console.log('getExistOne',result);
         if(Array.isArray(result)&&result.length>0){
             result=result[0];
         }else{
            result=null;
         }
         return result;
     },
     /**
      * 根据用户名和密码查找用户
      * @param {object} options 用户名密码对象
      * @return {object} 查找结果
      */
     async getOneByNameAndPassword(options){
         console.log('options',options);
         let _sql = `
            SELECT * FROM user WHERE password='${options.password}' AND name='${options.name}'
            limit 1
         `;
         console.log(_sql);
         let result = await dbUtils.query(_sql);
             if(Array.isArray(result)&&result.length>0) {
                 console.log('sql-result',result);
                result = result[0];
         }else{
             result =null;
         }
         return result;
     },
     /**
      * 根据用户名查找用户信息
      * @param {string}
      * @return {object||null} 查找结果
      */
     async getUserInfoByUsername(){
         let result =dbUtils.select(
             'user',
             ['id','email','name','detail_info','create_time','modified_time']
         );
         if(Array.isArray(result)&&result.length>0){
             result=result[0];
         }else{
             result=null;
         }
         return result;
     }
 };

 module.exports=user;