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



/**
 * 根据传入的类型分页获取电影
 * @param params
 * @returns {AxiosPromise}
 */
export  function  uploadBookImg(params){
    return request({
        url:`io/uploadFileBook`,
        method:"post",
        data: params,

    })
}

/**
 * 上传电影的封面
 * @param params
 * @returns {AxiosPromise}
 */
export  function  uploadMovieImg(params){
    return request({
        url:`io/uploadFileMovie`,
        method:"post",
        data: params,

    })
}

/**
 * 上传音乐的封面
 * @param params
 * @returns {AxiosPromise}
 */
export  function  uploadMusicImg(params){
    return request({
        url:`io/uploadFileMusic`,
        method:"post",
        data: params,

    })
}