import requst from "../utils/request"

/**
 * 用户登录
 * @param user
 * @returns {AxiosPromise}
 */
export  function login(user) {
    return requst({
        url:'/user/login',
        method: 'post',
        data:user
    })
}


/**
 * 用户注册
 * @param user
 * @returns {AxiosPromise}
 */
export  function create(user) {
    return requst({
        url:'/user/create',
        method: 'post',
        data:user
    })
}


export function helloWorld() {
    return requst({
        url:'/',
        method:'get'
    })

}