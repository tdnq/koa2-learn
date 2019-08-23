const  koa = require("koa");
const views = require('koa-views');
const path = require('path');
const app = new koa();
app.use(views(path.join(__dirname,'./views'),
    {extension: 'ejs'}
));
app.use (async (ctx)=>{
   let title = 'hello test';
   await ctx.render('index',{
       title1:'1',
       title2:'2'
    });
});

app.listen(3000,()=>{console.log("running")});