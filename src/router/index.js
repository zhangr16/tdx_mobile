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
        component: () => import('@/views/pages/limitFree'),
        meta: { title: '限量免单' }
      },
      {
        path: '/bearBuy',
        name: 'bearBuy',
        component: () => import('@/views/pages/bearBuy'),
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
    path: '/404',
    component: () => import('@/views/404')
  },
  { path: '*', redirect: '/404', hidden: true }
];
