import requst from "../utils/request";
import request from "../utils/request";

/**
 * 用户创建帖子
 * @param user
 * @returns {AxiosPromise}
 */
export  function createinvitationReply(invitationReply) {
    return requst({
        url:'/invitation-reply/createinvitationReply',
        method: 'post',
        data:invitationReply
    })
}



/**
 * 根据传入的参数分页获取帖子的回应
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetReplyByInvitationId(params){
    return request({
        url:`/invitation-reply/pageGetInvitationReply`,
        method:"get",
        params: params
    })
}


/**
 * 个人中心根据传入的参数分页获取帖子回复
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetMyInvitationReply(params){
    return request({
        url:`invitation-reply/pageGetMyReply`,
        method:"get",
        params: params
    })
}



/**
 * 用户创建帖子
 * @param user
 * @returns {AxiosPromise}
 */
export  function updateReply(invitationReply) {
    return requst({
        url:'/invitation-reply/updateReply',
        method: 'post',
        data:invitationReply
    })
}



/**
 * 根据id删除帖子
 * @param id
 * @returns {AxiosPromise}
 */
export  function  removeReplyById(id){
    return request({
        url:`invitation-reply/removeReplyById/${id}`,
        method:"post",
    })
}