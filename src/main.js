//入口
import Vue from 'vue'
import app from './App.vue'

//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// Vue.http.options.root ='http://192.168.110.167:8884/'



//mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


var vm = new Vue({

    el:'#app',
    render:renderHtml => renderHtml(app),
    router
})
