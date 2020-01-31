import Vue from 'vue';
import App from './app.vue';

import './assets/styles/global.css';

// 创建根元素
const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h)=>h(App)
}).$mount(root);