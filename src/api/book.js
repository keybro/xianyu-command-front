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
