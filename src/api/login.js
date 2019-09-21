import request from '@/utils/request'

export function login(obj) {
    return request({
        url: '/api/home/customer/login',
        method: 'post',
        data: obj
    })
}
