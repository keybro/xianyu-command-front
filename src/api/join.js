import request from "../utils/request"


/**
 * 当前用户创建进入小组的申请
 * @param params
 * @returns {AxiosPromise}
 */
export  function  createJoinApplication(id){
    return request({
        url:`join/createJoinApplication/${id}`,
        method:"post",
    })
}