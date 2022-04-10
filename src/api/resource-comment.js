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