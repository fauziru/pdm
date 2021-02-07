const state = () => ({
  load: [],
  isMobile: ''
})

const mutations = {
  setIsmobile (state, bool) {
    state.isMobile = bool
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
