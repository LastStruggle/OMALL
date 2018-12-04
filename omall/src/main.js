import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//引入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入vuex模块
import Vuex from 'vuex'
Vue.use(Vuex)

//安装引入qs解决axios,post发送数据的配置问题
import axios from 'axios';
import qs from 'qs';
Vue.prototype.$qs = qs;

import Swiper from "swiper"; 
import "swiper/dist/css/swiper.min.css";

//一级路由
import Register from "./container/Register.vue";//注册
import Gindex from "./container/Gindex.vue";

const routes = [
    {
      path: '/',
      redirect: '/index'
    },
    { 
      path: '/index',
      name:"index",
      component:Gindex 
    },
    { 
      path: '/register',
      name:"register",
      component:Register 
    }
    
]


const router = new VueRouter({  
    routes 
})

// 通过 store  实例一个vuex仓库
const store = new Vuex.Store({
  //状态
  state: {
    //以下为定义数据，存放于仓库里面，可以作为于全局数据，可以分发到各个组件，解决各个组件没有关联的问题，在各组件应用相同的数据
    title: "微博",
    author: "lemon",
    description: "这是一个最完美新浪微博客户端"
  },
  //修改状态
   mutations: {
    editTitle(state, data) {//改变title的值
      state.title = data
    },
    editAuthor(state, data) {//改变author的值
      state.author = data
    }
  },
  actions: {//在vuex文档中的Action页面中引入
    setTitle(context, data) {
      context.commit('editTitle', data);//发送改变后的title值回仓库
      context.commit('editAuthor', data)//发送改变后的author值回仓库
    }
  },
    //组件从store中拿数据
   getters: {
     getTitle: state => {//拿到数据类型title,getTitle为自己定义的属性名
      return state.title
    },
    getAuthor: state => {//拿到数据类型author
      return state.author
    },
     getAll: state => {//拿到所有数据
      return state
    }
  }
})



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
