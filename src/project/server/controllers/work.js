module.exports = async (ctx)=>{
    const title='work';
     await ctx.render('work',{
        title
    });
}