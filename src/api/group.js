import request from "../utils/request"

/**
 * 根据图片名称获取图片的URL
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getImgURLByName(params){
    return request({
        url:`group/getGroupHeadImgURL`,
        method:"get",
        params: params,

    })
}



/**
 * 根据图片名称获取图片的URL
 * @param params
 * @returns {AxiosPromise}
 */
export  function  createGroup(group){
    return request({
        url:`group/createGroup`,
        method:"post",
        data: group,
    })
}


/**
 * 获取用户首页的12个小组
 * @returns {AxiosPromise}
 */
export  function  getUserMainPageGroups(){
    return request({
        url:`group/getMainPageGroupList`,
        method:"get",
    })
}


/**
 * 根据小组id获取小组信息
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getGroupDetailById(id){
    return request({
        url:`group/getGroupInfoById/${id}`,
        method:"get",
    })
}


/**
 * 根据小组id推荐5个同类型小组
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getGroupRecommendById(id){
    return request({
        url:`group/getRecommendGroup/${id}`,
        method:"get",
    })
}


/**
 * 根据传入的类型分页获取小组
 * @param params
 * @returns {AxiosPromise}
 */
export  function pageGetGroupByType(params){
    return request({
        url:`group/getGroupListByType`,
        method:"get",
        params: params
    })
}

/**
 * 根据传入的类型分页获取小组
 * @param params
 * @returns {AxiosPromise}
 */
export  function getSearchGroup(params){
    return request({
        url:`/group/getSearchGroup`,
        method:"get",
        params: params
    })
}