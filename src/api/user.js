import request from "../utils/request"
import requst from "../utils/request";

export  function  getUserInfoById(id){
    return request({
        url:`user/getInfoById/${id}`,
        method:"get",
    })
}

export  function  nowUserInfo(){
    return request({
        url:`user/getInfo`,
        method:"get",
    })
}


/**
 *
 *根据当前用户id获取右边的基本信息
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getRightTagInfo(){
    return request({
        url:`/user/getRightTagInfo`,
        method:"get",
    })
}



/**
 *
 *获取当前用户的基本信息
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getCurrentUserInfo(){
    return request({
        url:`/user/getCurrentUserInfo`,
        method:"get",
    })
}


/**
 * 根据传入的user修改信息
 * @param user
 * @returns {AxiosPromise}
 */
export  function modifyInfo(user) {
    return requst({
        url:'/user/updateMyInfo',
        method: 'post',
        data:user
    })
}


