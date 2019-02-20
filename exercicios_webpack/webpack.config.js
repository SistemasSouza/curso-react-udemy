const path = require('path')

module.exports = {
    mode: 'development',
    entry:'./ex/index.js',
    output:{
        path:path.resolve(__dirname,'public'),
        filename: './bundle.js'
    },
    devServer:{
        port:8080,
        contentBase:path.join(__dirname,'public'),
        compress:true
    },
    module:{
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env',"@babel/preset-react"],
                  plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
              }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
}