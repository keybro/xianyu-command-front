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


/**
 * 用户个人中心修改小徐信息
 * @param params
 * @returns {AxiosPromise}
 */
export  function  updateGroupInfo(group){
    return request({
        url:`group/updateGroupInfo`,
        method:"post",
        data: group,
    })
}


/**
 * 分页获取全部小组
 * @param params
 * @returns {AxiosPromise}
 */
export  function pageGetAllGroupInfos(params){
    return request({
        url:`/group/pageGetAllGroup`,
        method:"get",
        params: params
    })
}


/**
 * 根据id删除书籍
 * @param id
 * @returns {AxiosPromise}
 */
export  function  removeGroupById(id){
    return request({
        url:`group/removeGroupById/${id}`,
        method:"post",
    })
}



/**
 * 判断当前 用户是否是小组创建者
 * @returns {AxiosPromise}
 */
export  function  isGroupCreater(){
    return request({
        url:`group/isCreater`,
        method:"get",
    })
}