//入口文件导入所需要的文件
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import  Mint from 'mint-ui';      //
import VueStrap from 'vue-strap'; //
import Element from 'element-ui';
// 基于vue的第三方要使用use
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex)
Vue.use(VueStrap); //
Vue.use(Element);
Vue.use(Mint);
//导入样式,上线后使用mui.min.css
import 'mint-ui/lib/style.css'; //
import 'element-ui/lib/theme-default/index.css';
import './statics/mui/css/mui.css';
import  './statics/css/state.css';

// 导入所要依赖的组件
import App from './App.vue';
import Home from './components/list/home.vue';
import Login from './components/list/login.vue';
import containter from './components/list/containter.vue';
// import list from './components/list/list.vue';
// import slide from './components/subcomponents/slider.vue'
import page from './components/subcomponents/page.vue'
// 创建路由对象，配置路由规则
const router= new VueRouter({
    routes: [
        {path:'/',redirect:'/login'},
        {
            path:'/login',
            component:Login,
            name:'',
            hidden:true,
        },
        {
            path:'/home',
            component:Home,
            children:[
                {path:'/home',redirect:'/list/containter'},
                {path:'/list/containter',component:containter,hidden:true},
                {path:'/subcomponents/page',component:page,},
            ]
        },
        

    ]
})
const store= new Vuex.Store({
    state:{
        
    },
    mutations: {

    },
    getters: {

    },

})   
// 创建项目根实例
new Vue({
    el:'#app',
    router,
    /**
    render:function(createElement){//createElement是一个函数
        return createElement(App)
    }
    **/
    render:h=>h(App)
})


