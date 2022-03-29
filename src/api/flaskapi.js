import requst from "../utils/request"

export function submitThePassWord(password) {
    return requst({
        url:'/passwordInput',
        method: 'post',
        data:password
    })
}

export function textAnalyse(text) {
    return requst({
        url:'/passwordAnalyse',
        method: 'post',
        data:text
    })
}


export function test() {
    return requst({
        url:'/user',
        method: 'get'
    })

}
