//  https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE
//  https://webpack.docschina.org/loaders/babel-loader/#%E7%94%A8%E6%B3%95

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 1.指定模式：本项目以development为例
    mode: 'development',
    // 2.指定入口文件
    entry: './src/index.js',
    // 3.指定输出目录
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 4.webpack默认只能解析js文件，所以其他类型文件需要通过相应的loader转化
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                          presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                'vue-style-loader',
                'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // 5. 请确保引入这个插件！
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin() //这将会产生一个包含以下内容的文件 dist/index.html

    ],
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        hot: true
    }
};