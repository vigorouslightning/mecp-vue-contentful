import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import SimplePage from '../pages/SimplePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {      
        path: '/about-simple',
        name: 'about-simple',
        component: SimplePage
    },
    {
        path: '/professionals/:data',
        name: 'professionals',
        component: SimplePage
    }
  ]
})