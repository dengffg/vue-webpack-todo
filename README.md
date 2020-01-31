#### 从零搭建基于vue+webpack 的todolist项目
----
首先创建目录vue-webpack-todo,在该目录下运行`npm init`初始化生成package.json。 

按照基本依赖： 
- `npm install vue` 当前版本 2.6.11
- `npm install webpack` 当前版本 4.41.5，使用 webpack 4+ 版本时，还需要安装CLI
- `npm install webpack-cli` 当前版本 3.3.10
- `npm install vue-loader` 当前版本 15.8.3
- `npm install vue-template-compiler` 当前版本 2.6.11。    vue-template-compiler需要独立安装的原因是你可以单独指定其版本。每个 vue 包的新版本发布时，一个相应版本的 vue-template-compiler 也会随之发布。编译器的版本必须和基本的 vue 包保持同步，这样 vue-loader 就会生成兼容运行时的代码.
- `npm install babel-loader` 当前版本8.0.6
- `npm install @babel/core @babel/preset-env` 当前版本 7.8.3
- `npm install vue-style-loader` 当前版本4.1.2
- `npm install css-loader` 当前版本3.4.2
- `npm install webpack-dev-server` 当前版本 3.2.0
- `npm install html-webpack-plugin` 当前版本 3.10.1

搭建项目基本结构：
- 在根目录下创建webpack.config.js文件。
- 创建如下目录结构
```
    vue-webpack-todo
        |___src
            |__app.vue    项目根组件
            |__index.js   项目入口文件
            |__assets
               |__styles 目录存放css
               |__images 目录存放图片
        |__webpack.config.js
```

首先基于webpack实现一个简单的helloworld,保证基本流程正常。 

打开app.vue文件，编写一个简单的hello world组件。
```
<template>
    <div class="main">hello world</div>
</template>

<style>
    .main {
        font-size: 24px;
        color: red;
    }
</style>
```

打开index.js文件，创建vue 实例。
```
import Vue from 'vue';
import App from './app.vue';

// 创建根元素
const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h)=>h(App)
}).$mount(root);
```

打开webpack.config.js文件，编写webpack配置。
```
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
                test: /\.vue$/,
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
```

打开package.json,在scripts中增加dev配置，
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --config webpack.config.js"
},
```

然后在控制台运行：`npm run dev`，控制台无报错，访问http://0.0.0.0:8000/ 页面显示hello world，这说明项目正常运行。
下面开始编写关于todolist部分。



### 【参考】
[webpack:  https://www.webpackjs.com/guides/](https://www.webpackjs.com/guides/) 

[vue-loader: https://vue-loader.vuejs.org/zh/guide/](https://vue-loader.vuejs.org/zh/guide/)

