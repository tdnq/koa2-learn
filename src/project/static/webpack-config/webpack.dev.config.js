const webpackMerge = require('webpack-merge');

const webpack = require('webpack');
var baseWebpackConfig = require('./webapck.base.config');

module.exports=webpackMerge(baseWebpackConfig,{
    devtool:'source-map',
    // devServer:{
    //     contentBase:'../output/dist',
    //     hot:true,
    //     port:3002
    // }, 
    mode:'development',
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:JSON.stringify('development')
            }
        })
    ]
});