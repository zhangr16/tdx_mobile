import request from '@/utils/request'

// 登录
export function login(obj) {
    return request({
        url: '/sys/login',
        method: 'post',
        params: obj
    })
}
// 登出
export function logout() {
    return request({
        url: '/sys/logout',
        method: 'get'
    })
}
// 注册
export function userRegister(obj) {
    return request({
        url: '/u/register',
        method: 'post',
        params: obj
    })
}
// 消息获取
export function getMsg(obj) {
    return request({
        url: '/sys/messagelist',
        method: 'post',
        params: obj
    })
}


// 用户首页信息
export function userIndex() {
    return request({
      url: '/u/index',
      method: 'get',
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

// 商品活动列表
export function indexSearch(obj) {
    return request({
        url: '/pa/index',
        method: 'post',
        data: obj
    })
}
// 商品活动 分类活动列表
export function cateSearch() {
    return request({
        url: '/pa/cateactivity',
        method: 'get',
    })
}
// 商品活动分类
export function cateTitle() {
    return request({
        url: '/pa/cate',
        method: 'get'
    })
}
// 商品活动详情
export function paDetail(obj) {
    return request({
        url: '/pa/detail',
        method: 'post',
        data: obj
    })
}

// 子任务商品详情
export function tDetail(obj) {
    return request({
        url: '/t/detail',
        method: 'post',
        data: obj
    })
}

// 发送验证码
export function sendVerify(obj) {
    return request({
        url: '/sys/sendsmsverify',
        method: 'post',
        params: obj
    })
}

// 获取订单id
export function tReceive(obj) {
    return request({
        url: '/t/receive',
        method: 'post',
        params: obj
    })
}

// 订单详情
export function oDetail(obj) {
    return request({
        url: '/o/detail',
        method: 'post',
        params: obj
    })
}

// 举报订单
export function oFeedback(obj) {
    return request({
        url: '/o/Feedback',
        method: 'post',
        params: obj
    })
}

// 验证订单url
export function oUrlcheck(obj) {
    return request({
        url: '/o/Urlcheck',
        method: 'post',
        params: obj
    })
}

// 验证订单url
export function oSubmit(obj) {
    return request({
        url: '/o/submit',
        method: 'post',
        params: obj
    })
}