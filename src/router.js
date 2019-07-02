//导入vue-router包 手动使用包
import VueRouter from 'vue-router'

//tabbar组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import ShopContainer from '../components/tabbar/ShopContainer.vue'

//news组件
import NewsList from '../components/news/NewsList.vue'

//图片分享组件
import Shpoing from '../components/shop/Shoping.vue'




//创建路由对象
var router = new VueRouter({
    routes:[
       {path:'/home',component:HomeContainer},
       {path:'/member',component:MemberContainer},
       {path:'/search',component:SearchContainer},
       {path:'/shop',component:ShopContainer},
       {path:'/home/newslist',component:NewsList},
       {path:'./home/shoping',conmponent:Shpoing}
    ],
    linkActiveClass:'mui-active'    //覆盖默认路由高亮的类
})

//把路由对象向外暴露
export default router
