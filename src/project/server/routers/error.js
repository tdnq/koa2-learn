const router=require("koa-router")();
const error = require('../controllers/error');
module.exports=router.get('/',error);