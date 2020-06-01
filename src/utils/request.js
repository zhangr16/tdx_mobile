import axios from 'axios'
import { Toast } from 'vant';

// 创建axios实例
const service = axios.create({
    timeout: 1200000 // 请求超时时间
})

service.baseURL = process.env.NODE_ENV == 'production' ? "http://www.taoxiaoxiong.cn" : null

// request拦截器
service.interceptors.request.use(
    config => {
        // if (store.getters.token) {
        //     config.headers.Authorization = `${getToken()}`;
        // }
        return config
    }, error => {
        return Promise.reject(error)
    })

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // 导出方法不做数据回调处理
        if (response.config.responseType == 'blob') {
            return res
        }
        if (res.error.errno == 431) {
            Toast.fail('请重新登录');
            location.href = '/#/login'
        } else if (res.error.errno != 200) {
            Toast.fail(res.error.usermsg);
        }
        return res
    },
    error => {
        Toast.fail('亲，网络不给力，请稍后再试');
        return Promise.reject(error)
    }
)

export default service
