export const state = () => ({
  productos: [],
  categorias: []
})

export const getters = {
  getProductos(state) {
    return state.productos
  }
}

export const mutations = {
  async SET_PRODUCTS(state, productos) {
    return state.productos = productos
  }
}

export const actions = {
  async fetchProducts({ commit }, context) {
    const productos = await this.$storyapi.get('cdn/stories', {
      version: context.version,
      starts_with: context.starts_with
    })
    console.log(productos)
    return {
      productos: productos.data.stories.map((producto) => {
        return {
          id: producto.slug,
          title: producto.content.title,
          image: producto.content.image.filename,
          categoria: producto.content.categorias,
          description: producto.content.description.slice(0, 40)
        }
      })
    }
  }
}