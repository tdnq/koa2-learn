const koa =require('koa');
const app = new  koa();

app.use(async (ctx)=>{
    
    if(ctx.method==="GET" && ctx.url.startsWith('/getData.jsonp')){
        //获取callback
        let callbackName = ctx.query.callback||'callback';
        let returnData = {
            callbackName,
            success: true,
            data:{
                text: 'this is jsonp api',
                time: new Date().getTime()
            }
        }

        console.log(returnData);
        ctx.type='text/javascript';
        ctx.body = returnData;
    }else{
        ctx.body='else api';
    }
});

app.listen(3000,()=>{
    console.log('running..');
})