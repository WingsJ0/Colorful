const Path=require('path');

module.exports = 
{
    mode:'development',
    entry:
    {
        Index:__dirname+'/src/Index.jsx',
    },
    output: 
    {
        path:__dirname+'/dist/development',
        filename:'[name].js'
    },
    module: 
    {
        rules: 
        [
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:
                {
                    presets:['react','es2015']
                }
            },
            {
                test:/\.(css|less)$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.png$/,
                loader:'url-loader',
                options:
                {
                    name:'./image/[name].[ext]',
                    limit:1000
                }
            }
        ]
    },
    devtool:'eval-source-map',
    devServer:
    {
        contentBase:__dirname+'/dist/development',
        historyApiFallback:true,
        inline:true
    },
    resolve: 
    {
        alias: 
        {
            Component:Path.resolve(__dirname,'src/component/'),
            Public:Path.resolve(__dirname,'src/public/'),
            Resource:Path.resolve(__dirname,'resource'),
            Global:Path.resolve(__dirname,'src/global')
        }
    }
};