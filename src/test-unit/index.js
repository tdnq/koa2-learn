const koa = require('koa');
const app = new koa();

const server = async (ctx,next)=>{
    let result = {
        success: true,
        data: null
    };

    if(ctx.method==='GET'){
        //判断url
        if(ctx.url === '/getString.json'){
            result.data = 'this string data';
        }else if(ctx.url==='/getNmuber.json'){
            result.data = 1313;
        }else{
            result.success=false;
        }
        ctx.body = result;
        next&&next();
    }
    //post resquest
    else if(ctx.method==='POST'){
        if(ctx.url==='/postData.json'){
            result.data='post data ok';
        }else{
            result.success=false;
        }
        ctx.body=result;
        next&&next();
    }
    //其他请求
    else{
        ctx.body='else res';
        next&&next();
    }
}

app.use(server);
module.exports=app;
app.listen(3000,()=>{
    console.log('test starting...');
});