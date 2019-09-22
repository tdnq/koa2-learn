const userInfoServices=require('../services/user-info');
const userCode = require('../codes/user');
module.exports={
    /**
     * 登录操作
     * @param {object} ctx 上下文对象
     */
    async signIn(ctx){
        console.log('body',ctx.request.body);

        let formData = ctx.request.body;
        let result={
            success:false,
            message:'',
            data:null,
            code:''
        };
        console.log(formData);
        let userResult = await userInfoServices.signIn(formData);
        console.log(userResult);
        //查找用户是否存在
        if(userResult){
            if(formData.username===userResult.name){
                result.success=true;
            }else{
                result.message=userCode.FAIL_USER_OR_PASSWORD_ERROR;
                result.code='FAIL_USER_OR_PASSWORD_ERROR';
            }
        }else{
            result.code='FAIL_USER_NO_EXIT';
            result.message=userCode.FAIL_USER_NO_EXIST;
        }
        //添加会话信息
        if(result.success===true){
            let session=ctx.session;
            session.isLogin=true;
            session.username = userResult.name;
            session.userId= userResult.id;
            ctx.redirect('/work');
        }else{
            // result.message=userCode.ERROR_SYS;
            ctx.redirect('/error');
        }
        ctx.body=result;
    },
    /**
     * 注册操作
     * @param {object} ctx上下文对象
     */
    async signUp(ctx){
        let formData=ctx.request.body;
        let result={
            success:false,
            message:'',
            data: null
        };
        //判断数据是否合理
        console.log('fromdata',formData);
        let validateResult = userInfoServices.validatorSignUp(formData);
        console.log('validateResult',validateResult);
        if(validateResult.success===false){
            result=validateResult;
            ctx.body=result;
            return;
        }
        let existOne = await userInfoServices.getExitOne(formData);
        console.log('existOne',existOne);
        //判断是否有用户存在
        if(existOne){
            if(existOne.name===formData.username){
                result.message=userCode.FAIL_USER_NAME_IS_EXIST;
                ctx.body=result;
                return;
            }
            if(existOne.email===formData.email){
                result.message=userCode.FAIL_EMAIL_IS_EXIST;
                ctx.body=result;
                return ;
            }
        }
        let userResult = await userInfoServices.create({
            email:formData.email,
            password:formData.password,
            name:formData.username,
            create_time:new Date().getTime(),
            level:1
        });
        if(userResult&&userResult.insertId*1>0){
            result.success=true;
            
            ctx.redirect('/');
        }else{
            result.message=userCode.ERROR_SYS;
        }
        ctx.body = result;
    },

    /**
     * 获取用户信息
     * @param {object} ctx上下文对象
     */
    async getLoginUserInfo(ctx){
        let session=ctx.session;
        let isLogin = session.isLogin;
        let username=session.username;
        console.log('session',session);
        let result={
            success:false,
            message:'',
            data:null
        }
        if(isLogin===true&&username){
            let userInfo = await userInfoServices.getUserInfoByUsername(username);
            if(userInfo){
                result.data=userInfo;
                result.success=true;
            }else{
                result.message=userCode.FAIL_USER_NO_LOGIN;
            }
        }else  {
            //TODO
        }
        ctx.body=result;
    },
    /**
     * 校验用户是否登录
     * @param {object} ctx上下文对象
     */
    validateLogin(ctx){
        let result={
            success:false,
            message:userCode.FAIL_USER_NO_LOGIN,
            data:null,
            code:'FAIL_USER_NO_LOGIN'
        };
        let session=ctx.session;
        if(session&&session.isLogin===true){
            result.success=true,
            result.message='',
            result.code=''
        }
        return result;
    }
}