const validator = require("validator");
const userModel = require('../models/user-info');
const userCode = require('../codes/user');
const user={
    /**
     * 创建用户
     * @param {object} user 用户信息
     * @return {object} 创建结果
     */
    async create(user){
        let result = await userModel.create(user);
        return result;
    },
    /**
     * 查找用户信息
     * @param {object} 查找的用户表单
     * @return {object} 查找结果
     */
    async getExitOne(formData){
        let result=await userModel.getExistOne({
            email:formData.email,
            name: formData.username
        });
        return result;
    },
    /**
     * 登录业务操作
     * @param {object} formData 登录表单信息
     * @return {object}
     */
    async signIn(formData){
        console.log('services',formData)
        let result = await userModel.getOneByNameAndPassword({
            name:formData.username,
            password: formData.password
        });
        return result;
    },
    /**
     * 根据用户名查找用户业务操作
     * @param {string} username 用户名
     * @return {object||null} 查找结果
     */
    async getUserInfoByUsername(username){
        let result = await userModel.getUserInfoByUsername(username);
        let userInfo={
            email:result.email,
            username:result.name,
            detailInfo: result.detail_info,
            createTime: result.create_time
        };
        return userInfo;
    },
    /**
     * 检验用户注册数据
     * @param {object} userInfo 用户注册数据
     * @return {object} 校验结果
     */
    validatorSignUp(userInfo){
        let result={
            success:false,
            message:''
        };
        if(!(userInfo.username.length>1&&userInfo.username.length<8)){
                 result.message=userCode.ERROR_USER_NAME;
                return result;
        }
        // else if(!/[\w+]{6,16}/.test(userInfo.password)){
        else if(!userInfo.password.length>3){
            result.message=userCode.ERROR_PASSWORD;
            return result;
        }else if(!validator.isEmail(userInfo.email)){
            result.message=userCode.ERROR_EMAIL;
            return result;
        }else if(userInfo.password!==userInfo.confirmPassword){
            result.message=userCode.ERROR_PASSWORD_CONFIRM;
            return result;
        }else{
            result.success=true;
            return result;
        }
    }
};

module.exports = user;