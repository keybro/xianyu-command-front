//vue2.0以后，vue就不再对vue-resource进行更新，而是推荐axios
//Axios 是一个基于 promise 的 HTTP 库，封装好了许多http请求响应的方法
import axios from 'axios';
import router from '../router';
// import {Message} from 'element-ui'
import {isTokenExist,getToken,isUploadImg} from "./auth";

const service = axios.create({
    //请求路径的前面被加上/api
    baseURL:'/api',
    timeout:10000,
});
//请求拦截器，可以拦截每次或指定的HTTP请求，并可修改配置项
service.interceptors.request.use(config=>{
    if(isTokenExist()){
        //让每一次请求携带token
        // console.log(getToken())
        config.headers['token']=getToken();
    }
    if (isUploadImg()){
        config.headers['Content-Type']='multipart/form-data'
        console.log("请求头")
        console.log(config.headers['Content-Type'])
    }
    return config;
},error=>{
    return Promise.reject(error);
});

//响应拦截器，在接收到响应，做出的处理
service.interceptors.response.use(response=>{
        //token过期失效，跳转到登录页面
        if(response.data.code==1){
            router.push('/login');
            response.data.errMsg='身份过期，请重新登录';
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    });
export default service;
