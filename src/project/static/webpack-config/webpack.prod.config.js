const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webapck.base.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin  =require('optimize-css-assets-webpack-plugin');

module.exports=webpackMerge(baseWebpackConfig,{
    mode:'production',
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache:true,
                parallel:true
            }) ,
            new OptimizeCssAssetsPlugin({})
        ]
    }
});