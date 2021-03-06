const state = {
  token: null,
  user: null,
  isAuthenticated: false
}

const actions = {
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  setUser ({ commit }, user) {
    commit('SET_USER', user)
  }
}

const mutations = {
  SET_TOKEN (state, token) {
    state.isAuthenticated = !!(token)
    state.token = token
  },
  SET_USER (state, user) {
    state.user = user
  }
}
export default {
  state, 
  actions,
  mutations
}

