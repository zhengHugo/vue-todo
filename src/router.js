import Vue from 'vue';
import Router from 'vue-router'
import About from "@/components/views/About";
import Home from "@/components/views/Home";

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name:'home',
      component: Home
    },
    {
      path:'/about',
      name: 'about',
      component: About
    }
  ]
})
