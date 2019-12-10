import request from '@/utils/request'

// 积分明细
export function integraldetail(obj) {
  return request({
    url: '/u/integraldetail',
    method: 'post',
    params: obj
  })
}

// 积分信息
export function fundsummary(obj) {
  return request({
    url: '/u/fundsummary',
    method: 'post',
    params: obj
  })
}

// 积分信息
export function withdraw(obj) {
  if (obj) {
    return request({
      url: '/u/withdraw',
      method: 'post',
      params: obj
    })
  } else {
    return request({
      url: '/u/withdraw',
      method: 'get',
    })
  }
}

// 交易明细
export function transactionDetail(obj) {
  return request({
    url: '/u/transactiondetail',
    method: 'post',
    params: obj
  })
}
// 提现记录详情
export function withdrawdetail(obj) {
  return request({
    url: '/u/Withdrawdetail',
    method: 'post',
    params: obj
  })
}


// 个人基本信息
export function userInfo(obj) {
  if (obj) {
    return request({
      url: '/u/info',
      method: 'post',
      params: obj
    })
  } else {
    return request({
      url: '/u/info',
      method: 'get',
    })
  }
}

// 修改密码
export function modifypwd(obj) {
  return request({
    url: '/sys/modifypwd',
    method: 'post',
    params: obj
  })
}

// 实名认证
export function verifyProve(obj) {
  if (obj) {
    return request({
      url: '/u/prove',
      method: 'post',
      params: obj
    })
  } else {
    return request({
      url: '/u/prove',
      method: 'get',
    })
  }
}

// 亲友活动奖励
export function activityAward(obj) {
  return request({
    url: '/u/Activityaward',
    method: 'post',
    params: obj
  })
}

// 忘记密码
export function findPwd(obj) {
  return request({
    url: '/sys/Changepwd',
    method: 'post',
    params: obj
  })
}

// 银行卡绑定
export function ubankInfo(obj) {
  if (obj) {
    return request({
      url: '/u/bank',
      method: 'post',
      data: obj
    })
  } else {
    return request({
      url: '/u/bank',
      method: 'get'
    })
  }
}

// 获取银行分支
export function getBankBranch(obj) {
  return request({
    url: '/u/Bankbranchcondition',
    method: 'post',
    params: obj
  })
}