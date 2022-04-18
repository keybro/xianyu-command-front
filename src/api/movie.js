import request from "../utils/request"
import requst from "../utils/request";

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


/**
 * 搜索页面根据关键词和作品类型显示书本列表
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getSearchMovie(params){
    return request({
        url:`/movie/getSearchMovie`,
        method:"get",
        params: params
    })
}


/**
 * 搜索页面根据关键词和作品类型显示书本列表
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getMovieTop(params){
    return request({
        url:`/movie/getMovieTop`,
        method:"get",
        params: params
    })
}


/**
 * 搜索页面根据关键词和作品类型显示书本列表
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetAllMovie(params){
    return request({
        url:`/movie/pageGetAllMovie`,
        method:"get",
        params: params
    })
}


/**
 * 根据图片名称获取图片的URL
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getMovieURLByName(params){
    return request({
        url:`movie/getMovieHeadImgURL`,
        method:"get",
        params: params,

    })
}


/**
 * 创建书本
 * @param movie
 * @returns {AxiosPromise}
 */
export  function createMovie(movie) {
    return requst({
        url:'/movie/createMovie',
        method: 'post',
        data:movie
    })
}



/**
 * 根据id删电影
 * @param id
 * @returns {AxiosPromise}
 */
export  function  removeMovieById(id){
    return request({
        url:`movie/removeMovieById/${id}`,
        method:"post",
    })
}