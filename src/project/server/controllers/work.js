module.exports = async (ctx)=>{
    console.log('word ctx',ctx);
    if(ctx.session&&ctx.session.isLogin&&ctx.session.username){

        const title='work';
        const  sessionInfo = JSON.stringify(ctx.session);
         await ctx.render('work',{
            title,
            sessionInfo
        });
    }
    else{
        ctx.redirect('/error');
    }
}