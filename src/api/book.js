import request from "../utils/request"
import requst from "../utils/request";

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


/**
 * 搜索页面根据关键词和作品类型显示书本列表
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getBookTop(params){
    return request({
        url:`book/getBookTop`,
        method:"get",
        params: params
    })
}


/**
 *
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetAllBook(params){
    return request({
        url:`book/pageGetAllBook`,
        method:"get",
        params: params
    })
}


/**
 * 根据图片名称获取图片的URL
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getBookURLByName(params){
    return request({
        url:`book/getBookHeadImgURL`,
        method:"get",
        params: params,

    })
}



/**
 * 创建书本
 * @param book
 * @returns {AxiosPromise}
 */
export  function createBook(book) {
    return requst({
        url:'/book/createBook',
        method: 'post',
        data:book
    })
}



/**
 * 根据id删除书籍
 * @param id
 * @returns {AxiosPromise}
 */
export  function  removeBookById(id){
    return request({
        url:`book/removeBookById/${id}`,
        method:"post",
    })
}

