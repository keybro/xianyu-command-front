import request from "../utils/request"
import requst from "../utils/request";

/**
 * 获取用户首页的5首歌
 * @returns {AxiosPromise}
 */
export  function  getUserMainPageMusic(){
    return request({
        url:`music/getMainPageMusic`,
        method:"get",
    })
}


/**
 * 根据音乐id查询详细信息
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getMusicDetailById(id){
    return request({
        url:`music/getMusicById/${id}`,
        method:"get",
    })
}

/**
 * 根据音乐id查询音乐信息
 * @param id
 * @returns {AxiosPromise}
 */
export  function  getMusicRecommendById(id){
    return request({
        url:`music/getMusicRecommendList/${id}`,
        method:"get",
    })
}


/**
 * 根据传入的类型分页获取音乐
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetMusicByType(params){
    return request({
        url:`music/getMusicListByType`,
        method:"get",
        params: params
    })
}


/**
 * 搜索页面根据关键词和作品类型显示音乐列表
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getSearchMusic(params){
    return request({
        url:`music/getSearchMusic`,
        method:"get",
        params: params
    })
}

/**
 * 搜索页面根据关键词和作品类型显示书本列表
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getMusicTop(params){
    return request({
        url:`/music/getMusicTop`,
        method:"get",
        params: params
    })
}


/**
 * 搜索页面根据关键词和作品类型显示书本列表
 * @param params
 * @returns {AxiosPromise}
 */
export  function  pageGetAllMusic(params){
    return request({
        url:`/music/pageGetAllMusic`,
        method:"get",
        params: params
    })
}


/**
 * 根据图片名称获取图片的URL
 * @param params
 * @returns {AxiosPromise}
 */
export  function  getMusicURLByName(params){
    return request({
        url:`music/getMusicHeadImgURL`,
        method:"get",
        params: params,

    })
}


/**
 * 创建书本
 * @param movie
 * @returns {AxiosPromise}
 */
export  function createMusic(music) {
    return requst({
        url:'/music/createMusic',
        method: 'post',
        data:music
    })
}



/**
 * 根据id删除音乐
 * @param id
 * @returns {AxiosPromise}
 */
export  function  removeMusicById(id){
    return request({
        url:`music/removeMusicById/${id}`,
        method:"post",
    })
}