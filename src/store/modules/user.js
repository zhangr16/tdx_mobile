import { login } from '@/api/login'
import { getToken, getName, setToken, removeToken, setName, removeName } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: getName()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },

  actions: {
    // 登录
    async Login({ commit }, userInfo) {
      const _username = userInfo.username.trim()
      const _password = userInfo.password
      let response = await login({
        account_name: _username,
        password: _password
      })
      if (response && response.code !== 200) {
        return false
      } else {
        const data = response.data;
        setToken(data.token)
        setName(data.account_name)
        commit('SET_TOKEN', data.token)
        commit('SET_NAME', data.account_name)
        return true
      }
    },

    // 登出
    async LogOut({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_NAME', '')
      removeName()
      removeToken()
    },
  }
}

export default user
