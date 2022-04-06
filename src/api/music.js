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