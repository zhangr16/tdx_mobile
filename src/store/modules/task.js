const task = {
  state: {
    isActive: 1,
    activeTab: 0
  },

  mutations: {
    SET_TEMP: (state, obj) => {
      state.isActive = obj.isActive
      state.activeTab = obj.activeTab
    }
  },
  actions: {
    setTemp({ commit }, val) {
      commit('SET_TEMP', val)
    }
  }
}

export default task
