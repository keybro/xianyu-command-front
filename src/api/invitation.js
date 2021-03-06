import requst from "../utils/request";
import request from "../utils/request";

/**
 * 用户创建帖子
 * @param user
 * @returns {AxiosPromise}
 */
export  function createInvitation(invitation) {
    return requst({
        url:'/invitation/createInvitation',
        method: 'post',
        data:invitation
    })
}


/**
 * 分页获取当前小组的帖子
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetInvitationByGroup(params){
    return request({
        url:`invitation/pageGetInvitationByGroup`,
        method:"get",
        params: params
    })
}


/**
 * 根据小组id推荐5个同类型小组
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getInvitationById(id){
    return request({
        url:`invitation/getInvitationById/${id}`,
        method:"get",
    })
}


/**
 * 个人中心分页获取帖子
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetMyInvitation(params){
    return request({
        url:`invitation/getMyInvitation`,
        method:"get",
        params: params
    })
}


/**
 * 用户个人中心修改帖子
 * @param user
 * @returns {AxiosPromise}
 */
export  function modifyInvitation(invitation) {
    return requst({
        url:'invitation/updateInvitation',
        method: 'post',
        data:invitation
    })
}


/**
 * 根据id删除帖子
 * @param id
 * @returns {AxiosPromise}
 */
export  function  removeInvitationById(id){
    return request({
        url:`invitation/removeInvitationById/${id}`,
        method:"post",
    })
}

