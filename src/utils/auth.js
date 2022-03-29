//使用cookies存取后端返回的token
//每次http请求再从cookie中提取出token放入请求头
import Cookies from 'js-cookie';
let TokenKey = 'Login-Token';
export function getToken() {
    return Cookies.get(TokenKey);
}
export function setToken(token) {
    return Cookies.set(TokenKey,token);
}
export function removeToken() {
    return Cookies.remove(TokenKey);
}
export function isTokenExist() {
    if(getToken()){
        return true;
    }else{
        return false;
    }
}