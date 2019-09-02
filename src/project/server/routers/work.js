const router=require("koa-router")();
const work = require('../controllers/work');
module.exports=router.get('/',work);