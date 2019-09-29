export default [
  {
    path: '/',
    component: () => import('@/views/index'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/pages/index'),
        meta: { title: '首页' }
      },
      {
        path: '/limitFree',
        name: 'limitFree',
        component: () => import('@/views/pages/classify'),
        meta: { title: '限量免单' }
      },
      {
        path: '/bearBuy',
        name: 'bearBuy',
        component: () => import('@/views/pages/classify'),
        meta: { title: '熊抢购' }
      },
      {
        path: '/task',
        name: 'task',
        component: () => import('@/views/pages/task'),
        meta: { title: '任务中心' }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/pages/mine'),
        meta: { title: '我的淘大熊' }
      }
    ]
  },
  // 马上抢
  {
    path: '/getSoon',
    name: 'getSoon',
    component: () => import('@/views/pages/index/getSoon'),
    meta: { title: ' ' }
  },
  // 开始任务
  {
    path: '/getStart',
    name: 'getStart',
    component: () => import('@/views/pages/index/getStart'),
    meta: { title: ' ' }
  },
  // 抢购
  {
    path: '/purchase',
    name: 'purchase',
    component: () => import('@/views/pages/index/purchase'),
    meta: { title: '抢购' }
  },
  // 好评截图
  {
    path: '/screenShots',
    name: 'screenShots',
    component: () => import('@/views/pages/task/screenShots'),
    meta: { title: '' }
  },
  // 申请售后
  {
    path: '/applyAfter',
    name: 'applyAfter',
    component: () => import('@/views/pages/task/applyAfter'),
    meta: { title: '' }
  },
  // 查看售后
  {
    path: '/viewAfter',
    name: 'viewAfter',
    component: () => import('@/views/pages/task/viewAfter'),
    meta: { title: '' }
  },
  // 查看售后详情
  {
    path: '/viewAfterDesc',
    name: 'viewAfterDesc',
    component: () => import('@/views/pages/task/viewAfterDesc'),
    meta: { title: '' }
  },
  // 协商历史
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/pages/task/history'),
    meta: { title: '协商历史' }
  },
  // 定制评价攻略
  {
    path: '/dzpjgl',
    name: 'dzpjgl',
    component: () => import('@/views/pages/task/gonglue/dzpjgl'),
    meta: { title: '' }
  },
  // 新手攻略
  {
    path: '/xsgl',
    name: 'xsgl',
    component: () => import('@/views/pages/task/gonglue/xsgl'),
    meta: { title: '' }
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/login/login'),
    meta: { title: '登录' }
  },
  // 登录
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/login/register'),
    meta: { title: '注册' }
  },
  // 账户提现
  {
    path: '/zhtx',
    name: 'zhtx',
    component: () => import('@/views/pages/mine/zhtx'),
    meta: { title: '' }
  },
  // 修改密码
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: () => import('@/views/pages/mine/resetPassword'),
    meta: { title: '' }
  },
  // 消息通知
  {
    path: '/msg',
    name: 'msg',
    component: () => import('@/views/pages/mine/msg'),
    meta: { title: '' }
  },
  // 实名认证
  {
    path: '/certification',
    name: 'certification',
    component: () => import('@/views/pages/mine/certification'),
    meta: { title: '' }
  },
  // 问题集
  {
    path: '/questions',
    name: 'questions',
    component: () => import('@/views/pages/mine/questions'),
    meta: { title: '' }
  },
  // 亲友团
  {
    path: '/friendShip',
    name: 'friendShip',
    component: () => import('@/views/pages/mine/friendShip'),
    meta: { title: '淘大熊' }
  },
  // 个人基本资料
  {
    path: '/personal',
    name: 'personal',
    component: () => import('@/views/pages/mine/personal'),
    meta: { title: '' }
  },
  // 分享好友
  {
    path: '/share',
    name: 'share',
    component: () => import('@/views/pages/mine/share'),
    meta: { title: '' }
  },
  // 投诉与建议
  {
    path: '/suggestions',
    name: 'suggestions',
    component: () => import('@/views/pages/mine/suggestions'),
    meta: { title: '' }
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  },
  { path: '*', redirect: '/404', hidden: true }
];
