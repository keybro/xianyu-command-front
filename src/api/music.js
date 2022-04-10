import request from "../utils/request"

/**
 * 获取用户首页的5首歌
 * @returns {AxiosPromise}
 */
export  function  getUserMainPageMusic(){
    return request({
        url:`music/getMainPageMusic`,
        method:"get",
    })
}


/**
 * 根据音乐id查询详细信息
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getMusicDetailById(id){
    return request({
        url:`music/getMusicById/${id}`,
        method:"get",
    })
}

/**
 * 根据音乐id查询音乐信息
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getMusicRecommendById(id){
    return request({
        url:`music/getMusicRecommendList/${id}`,
        method:"get",
    })
}


/**
 * 根据传入的类型分页获取音乐
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetMusicByType(params){
    return request({
        url:`music/getMusicListByType`,
        method:"get",
        params: params
    })
}