import axios from 'axios'
import store from '../store'
import { getToken, removeToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? "http://submission.husicong.cn" : "http://crm2.iletuan.cn",
    timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers.Authorization = `${getToken()}`;
        }
        return config
    }, error => {
        // Message({
        //     message: error.msg,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        return Promise.reject(error)
    })

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // if (res.code !== 200) {
        //     Message({
        //         message: res.msg,
        //         type: 'error',
        //         duration: 5 * 1000
        //     })
        // }
        return response.data
    },
    error => {
        const err = error.response.data
        if (err.code == 102) { // 未授权token过期跳登陆页
            removeToken()
            location.href = '/login'
        } else {
            // Message({
            //     message: err.message || err.msg,
            //     type: 'error',
            //     duration: 5 * 1000
            // })
        }
        return Promise.reject(error)
    }
)

export default service
