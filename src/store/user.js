import router from "@/router";
import {nowUserInfo} from "@/api/user";
// import {login} from "@/api/login"
// import {setToken} from "@/utils/auth";
const user={
    state:{
        isLogin:false,
        account:null,
        id:null,
        phone:null,
        position:null,
        realname:null,
        type:null,
        token:null,
    },
    getters:{
        isLogin:(state)=>{
            return state.isLogin
        },
        account:(state)=>{
            return state.account
        },
        id:(state)=>{
            return state.id
        },
        phone:(state)=>{
            return state.phone
        },
        position:(state)=>{
            return state.position
        },
        type:(state)=>{
            return state.type
        },
        realname:(state)=>{
            return state.realname
        },
        token: (state) => {
            if (state.token == null) {
                let sessionToken = sessionStorage.getItem('token')
                if (sessionToken != null) {
                    state.token = sessionToken
                    return sessionToken
                } else {
                    let localeToken = localStorage.getItem('token')
                    state.token = localeToken
                    return localeToken
                }
            }
            return state.token
        },
    },
    mutations: {
        userStatus:(state,account)=>{
            if(account){
                state.account=account
                state.isLogin=true
            } else if(account==null){
                sessionStorage.setItem("account",null)
                sessionStorage.setItem("token","")
                state.account=null
                state.isLogin=false
                state.token=""
            }
        },
        SET_ID: (state,id) =>{
            state.id=id;
        },
        SET_ACCOUNT: (state,account) =>{
            state.account=account;
        },
        SET_PHONE: (state,phone) =>{
            state.phone=phone;
        },
        SET_POSITION: (state,position) =>{
            state.position=position;
        },
        SET_REALNAME: (state,realname) =>{
            state.realname=realname;
        },
        SET_TYPE: (state,type) =>{
            state.type=type;
        },

        //登出
        logout(state) {
            // state.userInfo = null
            // state.token = null
            // localStorage.removeItem('token')
            // localStorage.removeItem('user')
            // sessionStorage.removeItem('token')
            // sessionStorage.removeItem('user')
            state.type=null
            state.id=null
            state.realname=null
            state.phone=null
            state.position=null
            state.account=null
            state.token=null
            state.isLogin=false
            sessionStorage.setItem("account",null)
            sessionStorage.setItem("token","")
            router.push('/login')
        },
    },
    actions:{
        setUserInfo({commit}){
            return new Promise((resolve,reject)=>{
                //进行网络请求
                nowUserInfo().then(resp=>{
                    let data=resp.data.data
                    console.log("vuex")
                    console.log(data);
                    commit("SET_ID",data.id)
                    commit("SET_ACCOUNT",data.account)
                    sessionStorage.setItem("account",data.account)
                    commit("SET_PHONE",data.phone)
                    commit("SET_POSITION",data.position)
                    commit("SET_REALNAME",data.realname)
                    commit("SET_TYPE",data.type)
                    resolve(resp)
                }).catch(error =>{
                    reject(error)
                })
            })
        }
    },
}

export default user