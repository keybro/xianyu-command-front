import requst from "../utils/request"

export  function login(userInfo) {
    return requst({
        url:'/user/login',
        method: 'post',
        data:userInfo
    })
}

export function helloWorld() {
    return requst({
        url:'/',
        method:'get'
    })

}