export const data = () => ({
  show: false
})

export const getters = {
  showMenu(state) {
    return this.show
  }
}

export const mutations = {
  SHOW_MENU(state, bool) {
    return (state.show = bool)
  }
}

export const actions = {
  active({commit}, bool) {
    return commit("SHOW_MENU")
  }
}