export const state = () => ({
  productos: [],
  catalogos: [],
  posts: [],
  discounts: []
});

export const getters = {
  getProductos(state) {
    return state.productos;
  },
  getCatalogos(state) {
    return state.catalogos;
  },
  getDiscounts(state) {
    return state.discounts;
  },
  getPosts(state) {
    return state.posts
  }
};

export const mutations = {
  SET_PRODUCTS(state, productos) {
    return (state.productos = productos);
  },
  SET_POSTS(state, posts) {
    return (state.posts = posts);
  },
  SET_CATALOGOS(state, catalogos) {
    return (state.catalogos = catalogos);
  },
  SET_DESCUENTOS(state, discounts) {
    return (state.discounts = discounts);
  },
};

export const actions = {
  async fetchProducts({ commit }, context) {
    const productos = await this.$storyapi.get("cdn/stories", {
      version: context.version,
      starts_with: context.starts_with
    });
    commit(
      "SET_PRODUCTS",
      productos.data.stories.map(producto => {
        return {
          id: producto.slug,
          title: producto.content.title,
          image: producto.content.image.filename,
          categoria: producto.content.categorias,
          description: producto.content.description.slice(0, 40)
        };
      })
    );
  },
  async fetchProductsByCategory({ commit }, context) {
    const productos = await this.$storyapi.get("cdn/stories", {
      version: context.version,
      starts_with: context.starts_with,
      filter_query: context.filter_query
    });
    commit(
      "SET_PRODUCTS",
      productos.data.stories.map(producto => {
        return {
          id: producto.slug,
          title: producto.content.title,
          image: producto.content.image.filename,
          categoria: producto.content.categorias,
          description: producto.content.description.slice(0, 40)
        };
      })
    );
  },
  async fetchCatalogues({ commit }, context) {
    const catalogos = await this.$storyapi.get("cdn/stories", {
      version: context.version,
      starts_with: context.starts_with
    });
    commit(
      "SET_CATALOGOS",
      catalogos.data.stories.map(catalogo => {
        return {
          bgImage: catalogo.content.image.filename,
          link: catalogo.content.archivo.url,
          title: catalogo.content.title
        };
      })
    );
  },
  async fetchDiscounts({ commit }, context) {
    const discounts = await this.$storyapi.get("cdn/stories", {
      version: context.version,
      starts_with: context.starts_with
    });
    commit(
      "SET_DESCUENTOS",
      discounts.data.stories.map(discount => {
        return {
          title: discount.content.name,
          bgImage: discount.content.imagen.filename,
          discount: discount.content.porcentage
        };
      })
    );
  },
  async fetchPosts({ commit }, context) {
    const posts = await this.$storyapi.get("cdn/stories", {
      version: context.version,
      starts_with: context.starts_with
    });
    commit(
      "SET_POSTS",
      posts.data.stories.map(post => {
        return {
          title: post.content.title,
          image: post.content.image.filename,
          time: post.published_at,
          id: post.content.title,
          description: post.content.description
        };
      })
    );
  }
};
