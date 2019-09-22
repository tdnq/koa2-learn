module.exports = async (ctx)=>{
    const title='sign';
     await ctx.render('sign',{
        title
    });
}