const router=require("koa-router")();
const sign = require('../controllers/sign');
module.exports=router.get('/',sign);