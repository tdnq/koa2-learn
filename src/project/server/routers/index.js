const router = require('koa-router')();
const api = require('./api');
const sign = require('./sign');
const work = require('./work');
const error=require("./error");
const home = require('./home');
router.use('/work',work.routes(),work.allowedMethods());
router.use('/sign',sign.routes(),sign.allowedMethods());
router.use('/error',error.routes(),error.allowedMethods());
router.use('/',home.routes(),home.allowedMethods());
router.use('/api',api.routes(),api.allowedMethods());
module.exports=router;