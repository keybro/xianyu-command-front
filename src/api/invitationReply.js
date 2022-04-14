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