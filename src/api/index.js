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

// 售后申请: 1申请 3处理  5修改
export function saleApply(obj) {
    return request({
        url: '/s/saleapply',
        method: 'post',
        data: obj
    })
}

// 售后列表
export function saleApplyList(obj) {
    return request({
        url: '/s/salelist',
        method: 'post',
        data: obj
    })
}

// 售后历史
export function saleHistory(obj) {
    return request({
        url: '/s/salehistory',
        method: 'post',
        data: obj
    })
}

// 售后列表历史记录
export function saleApplyHistory(obj) {
    return request({
        url: '/s/saleapplyhistory',
        method: 'post',
        data: obj
    })
}
