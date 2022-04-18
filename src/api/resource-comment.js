import requst from "../utils/request";
import request from "../utils/request";

/**
 * 用户写书籍评论
 * @param user
 * @returns {AxiosPromise}
 */
export  function writeBookComment(comment) {
    return requst({
        url:'resource-comment/writeBookComment',
        method: 'post',
        data:comment
    })
}


/**
 * 分页获取
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetAllCommentByTypeAndId(params){
    return request({
        url:`resource-comment/pageGetAllCommentByTypeAndId`,
        method:"get",
        params: params
    })
}


/**
 * 用户个人中心根据类型分页获取当前用户的所有评话
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetCurrentAllComment(params){
    return request({
        url:`resource-comment/pageGetAllCommentPersonCenter`,
        method:"get",
        params: params
    })
}

/**
 * 根据传入的参数修改评话
 * @param comment
 * @returns {AxiosPromise}
 */
export  function modifyComment(comment) {
    return requst({
        url:'resource-comment/updateMyComment',
        method: 'post',
        data:comment
    })
}



/**
 * 根据id删除评话
 * @param id
 * @returns {AxiosPromise}
 */
export  function  removeCommentById(id){
    return request({
        url:`resource-comment/removeCommentById/${id}`,
        method:"post",
    })
}