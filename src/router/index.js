import Vue from "vue"
import VueRouter from "vue-router"
import login from "@/views/login/login";
import helloWorld from "@/views/test/helloWorld";
import signUp from "../views/login/signUp";
Vue.use(VueRouter)

const routes = [
    {path:"/",name:"login",component:login},
    {path: "/signUp",name: "signUp",component: signUp},
    {path: "/hello",name: "helloWorld",component: helloWorld}
]
 const router = new VueRouter({
routes
});

export default router