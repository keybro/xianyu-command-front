import request from "../utils/request"


/**
 * 当前用户创建进入小组的申请
 * @param params
 * @returns {AxiosPromise}
 */
export  function  createJoinApplication(id){
    return request({
        url:`join/createJoinApplication/${id}`,
        method:"post",
    })
}

/**
 * 根据传入的类型分页获取电影
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetMyJoinGroups(params){
    return request({
        url:`join/getMyGroup`,
        method:"get",
        params: params
    })
}


/**
 * 根据id删除书籍
 * @param id
 * @returns {AxiosPromise}
 */
export  function  quitGroupById(id){
    return request({
        url:`join/quitThisGroup/${id}`,
        method:"post",
    })
}



/**
 * 当前用户创建进入小组的申请
 * @param params
 * @returns {AxiosPromise}
 */
export  function  isHaveJoin(id){
    return request({
        url:`join/isHaveJoin/${id}`,
        method:"get",
    })
}