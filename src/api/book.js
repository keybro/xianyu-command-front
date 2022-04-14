import request from "../utils/request"

/**
 * 获取用户首页的5个书籍
 * @returns {AxiosPromise}
 */
export  function  getUserMainPageBook(){
    return request({
        url:`book/getMainPageBook`,
        method:"get",
    })
}


/**
 * 根据图书id查询详细信息
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getBookDetailById(id){
    return request({
        url:`book/getBookById/${id}`,
        method:"get",
    })
}

/**
 * 根据当前页面推荐5个同类型的书籍
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getBookRecommendById(id){
    return request({
        url:`book/getBookRecommendList/${id}`,
        method:"get",
    })
}

/**
 * 根据传入的类型分页获取书本
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetBookByType(params){
    return request({
        url:`book/getBookListByType`,
        method:"get",
        params: params
    })
}



/**
 * 搜索页面根据关键词和作品类型显示书本列表
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getSearchBook(params){
    return request({
        url:`book/getSearchBook`,
        method:"get",
        params: params
    })
}

