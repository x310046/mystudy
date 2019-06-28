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
