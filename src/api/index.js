import request from "@/utils/request";

export const getListAPI=()=>{
    //用这个接口测试，如果url使用http开头会忽略baseURL，axios直接请求此地址
    return request({
        url: 'http://geek.itheima.net/v1_0/channels'
    })
}
