export const state = () => ({
  productos: [],
  categorias: []
})

export const getters = {
  getCourses(state) {
    return state.productos
  }
}

export const mutations = {
  fetchingProductos(state, value) {
    
  }
}