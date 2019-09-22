module.exports = async (ctx)=>{
    const title='error';
     await ctx.render('error',{
        title
    });
}