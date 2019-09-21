import { constantRouterMap } from '@/router/index';


// 获取异步路由表，返回符合用户开通服务的路由表
// 1 为管理员权限，2 为角色权限
function separateRoles() {
  return constantRouterMap
}

const permission = {
  state: {
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        let accessedRouters = separateRoles(data)
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    }
  }
};

export default permission;

