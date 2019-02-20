const path = require('path')
module.exports = {
    entry:'./ex/index.jsx',
    output:{
        path:path.resolve(__dirname,'public'),
        filename: './bundle.js'
    },
    devServer:{
        port:8080,
        contentBase:path.join(__dirname,'public'),
        compress:true
    },
    resolve:{
      extensions:['.js','.jsx']
    },
    module:{
        rules: [
            {
              test: /\.m?jsx$/,
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