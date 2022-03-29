import request from "../utils/request"

export  function  getUserInfoById(id){
    return request({
        url:`user/getInfoById/${id}`,
        method:"get",
    })
}

export  function  nowUserInfo(){
    return request({
        url:`user/getInfo`,
        method:"get",
    })
}