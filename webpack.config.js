const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,'dist')
    },
    module: {
        rules: [
           { test:/\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.vue$/, loader: 'vue-loader'}
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: "./src/index.html"
        })
    ]
};