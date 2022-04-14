import request from "../utils/request"

/**
 * 根据传入的类型分页获取电影
 * @param params
 * @returns {AxiosPromise}
 */
export  function  uploadGroupImg(params){
    return request({
        url:`io/uploadFile`,
        method:"post",
        data: params,

    })
}