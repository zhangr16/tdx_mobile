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
        path: '/taskCenter',
        name: 'taskCenter',
        component: () => import('@/views/pages/taskCenter'),
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
    meta: { title: '' }
  },
  {
    path: '/getStart',
    name: 'getStart',
    component: () => import('@/views/pages/index/getStart'),
    meta: { title: '开始任务' }
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: () => import('@/views/pages/index/purchase'),
    meta: { title: '抢购' }
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  },
  { path: '*', redirect: '/404', hidden: true }
];
