import VueRouter from 'vue-router'
import login from './pages/login.vue'
import index from './pages/index.vue'
import userCenter from"./pages/userCenter.vue"
import course from "./pages/course.vue"


export default new VueRouter({
    base:'/',
    routes:[
        {
            path:'/',
            name:'index',
            component:index
        },{
            path:'/login',
            component:login
        },
        {
            path: "/userCenter",
            component: userCenter
        }, {
            path: "/course/:id",
            name:'course',
            component:course
        }
    ]
})

