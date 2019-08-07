/*
* 路由管理
* */
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: App
    }
]

export default new VueRouter({
    routes
})
