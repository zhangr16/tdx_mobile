import request from '@/utils/request'

// 登录
export function login(obj) {
    return request({
        url: '/sys/login',
        method: 'post',
        params: obj
    })
}
export function logout() {
    return request({
        url: '/sys/logout',
        method: 'get'
    })
}


// 用户（PC活动列表）
export function order_list(obj) {
    return request({
        url: '/o/orderlist',
        method: 'post',
        data: obj
    })
}

// 用户（PC活动列表）
export function order_action(obj) {
    return request({
        url: '/o/orderaction',
        method: 'post',
        data: obj
    })
}

// 上传图片
export function uploadImg(obj) {
    return request({
        url: '/i/upload',
        method: 'post',
        data: obj
    })
}

// 删除上传图片
export function deleteUpload(obj) {
    return request({
        url: '/i/delete',
        method: 'post',
        data: obj
    })
}