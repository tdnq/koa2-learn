const path = require('path');
const koa = require('koa');
const  convert = require('koa-convert');
const views = require('koa-views');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');
const session = require('koa-session-minimal');
const mysqlStore = require('koa-mysql-session');

const config = require('../config');
const routers = require('./routers/index');
const app = new koa();

// const sessionMysqlConfig = {
//     user:config.database.user,
//     password: config.database.password,
//     database: config.database.database,
//     host: config.database.host
// };

// app.use(session({
//     key:'USER_SID',
//     store: new mysqlStore(sessionMysqlConfig)
// }));

app.use(bodyParser());
app.use(convert(koaStatic(
    path.join(__dirname,'../static')
)));
// 配置服务端模板引擎中间件
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}));

//初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

//监听启动端口

app.listen(config.port,()=>{
    console.log(`app starting at port${config.port}`);
})



