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
        meta: { title: '我的' }
      }
    ]
  },
  {
    path: '/getSoon',
    name: 'getSoon',
    component: () => import('@/views/pages/index/getSoon'),
    meta: { title: ' ' }
  },
  {
    path: '/getStart',
    name: 'getStart',
    component: () => import('@/views/pages/index/getStart'),
    meta: { title: ' ' }
  },
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
  {
    path: '/404',
    component: () => import('@/views/404')
  },
  { path: '*', redirect: '/404', hidden: true }
];
