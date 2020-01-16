import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import app from './app.vue'
import router from './router'
import store from './store/vuexIndex'

Vue.use(VueRouter);
Vue.use(Vuex);

router.beforeEach((to,from,next)=>{
    if (store.state.userInfo || to.path === "/login") {
        next()
    } else {
        next({
            path: "/login"
        })
    }
});

new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(app)

});