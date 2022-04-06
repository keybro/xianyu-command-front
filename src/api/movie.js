import request from "../utils/request"

/**
 * 获取用户首页的5部电影
 * @returns {AxiosPromise}
 */
export  function  getUserMainPageMovie(){
    return request({
        url:`movie/getMainPageMovie`,
        method:"get",
    })
}