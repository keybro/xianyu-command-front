import Vue from "vue"
import VueRouter from "vue-router"
import login from "@/views/login/login";
import signUp from "../views/login/signUp"
import topMenu from "../views/home/topMenu";
import userMainPage from "../views/user/userMainPage";
import userPersonCenter from "../views/user/userPersonCenter";
import detail from "../views/user/detail";
import groupDetail from "../views/group/groupDetail";
import bookClassify from "../views/classify/bookClassify";
import movieClassify from "../views/classify/movieClassify";
import musicClassify from "../views/classify/musicClassify";
import groupClassify from "../views/classify/groupClassify";
import invitationDetail from "../views/invitation/invitationDetail";
import searchPage from "../views/search/searchPage"
import bookTop from "../views/top/bookTop";
import movieTop from "../views/top/movieTop";
import musicTop from "../views/top/musicTop";
import adminPersonCenter from "../views/admin/adminPersonCenter";
Vue.use(VueRouter)

const routes = [
    {path:"/",name:"login",component:login},
    {path: "/signUp",name: "signUp",component: signUp},
    {path: "/homePage",component: topMenu,redirect:"/homePage/list",
        children:[
            {path:"list",component:userMainPage},
            {path: "userPersonCenter",component: userPersonCenter},
            {path: "detail",component: detail},
            {path: "groupDetail",component: groupDetail},
            {path: "searchPage",component: searchPage},
            {path: "classifyOfBook",component: bookClassify},
            {path: "classifyOfMovie",component: movieClassify},
            {path: "classifyOfMusic",component: musicClassify},
            {path: "classifyOfGroup",component: groupClassify},
            {path: "invitationDetail",component: invitationDetail},
            {path: "searchPage",component: searchPage},
            {path: "bookTop",component: bookTop},
            {path: "movieTop",component: movieTop},
            {path: "musicTop",component: musicTop},
            {path: "admin",component: adminPersonCenter},
        ]
    }
]
 const router = new VueRouter({
routes
});

export default router