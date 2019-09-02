const path =require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const srcResolve = function(file){
    return path.join(__dirname,'..','src',file);
};
const distReslove=function(file){
    return path.join(__dirname,'..','output','dist',file);
};
module.exports={
    entry:{
        'index':srcResolve('pages/index.js'),
        // 'error':srcResolve('pages/error.js')
    },
    output:{
        path:distReslove(''),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react'],
                    }
                }
            },
            {
                test:/\.(css|less)$/,
                exclude: /node_modules/,
                use:[
                   {
                       loader:'style-loader',
                   } ,{
                       loader:'css-loader'
                   },
                   {
                       loader:'less-loader'
                   }
                //    MiniCssExtractPlugin.loader
                    // {
                    //     loader:'postcss-loader',
                    //     options:{
                    //         plugins:()=>{
                    //             return [];
                    //         }
                    //     }
                    // },
                ]
            },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        }),
        new CleanWebpackPlugin()
    ],
    // optimization:{
    //     splitChunks:{
    //         cacheGroups:{
    //             test:/[\\/]]node_modules[\\/]/,
    //             name:'vendor',
    //             chunks:'all'
    //         }
    //     }
    // }
}