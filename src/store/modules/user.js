import { login, logout } from '@/api/index'
import { getToken, getName, setToken, removeToken, setName, removeName } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: JSON.parse(getName())
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, data) => {
      state.name = data
    }
  },

  actions: {
    // 登录
    async Login({ commit }, userInfo) {
      let response = await login(userInfo)
      // console.log(response)
      if (response && response.error.errno == 200) {
        const data = response.data;
        setName(JSON.stringify(data))
        commit('SET_NAME', data)
        setToken('faketoken')
        commit('SET_TOKEN', 'faketoken')
        return true
      } else {
        return false
      }
    },

    // 登出
    async LogOut({ commit }) {
      let res = await logout()
      if (res && res.error.errno == 200) {
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        removeName()
        removeToken()
        return true
      } else {
        return false
      }
    },
  }
}

export default user
