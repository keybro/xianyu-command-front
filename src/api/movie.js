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


/**
 * 根据电影id查询详细信息
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getMovieDetailById(id){
    return request({
        url:`movie/getMovieById/${id}`,
        method:"get",
    })
}


/**
 * 根据电影id推荐5部电影
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getMovieRecommendById(id){
    return request({
        url:`movie/getMovieRecommendList/${id}`,
        method:"get",
    })
}


/**
 * 根据传入的类型分页获取电影
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetMovieByType(params){
    return request({
        url:`movie/getMovieListByType`,
        method:"get",
        params: params
    })
}