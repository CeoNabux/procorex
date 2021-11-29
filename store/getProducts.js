export const state = () => ({
  productos: [],
  catalogos: [],
  posts: [],
  discounts: [],
  hero: [],
  loading: false,
  productsByCategories: []
});

export const getters = {
  getProductos(state) {
    return state.productos;
  },
  getProductsByCategory(state) {
    return state.productsByCategories;
  },
  getCatalogos(state) {
    return state.catalogos;
  },
  getDiscounts(state) {
    return state.discounts;
  },
  getPosts(state) {
    return state.posts;
  },
  getHero(state) {
    return state.hero;
  },
  getLoading(state) {
    return state.loading;
  }
};

export const mutations = {
  SET_PRODUCTS(state, productos) {
    return state.productos.push(...productos);
  },
  SET_PRODUCTS_BY_CATEGORIES(state, productos) {
    return state.productosByCategory.push(...productos);
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
  SET_HEROS(state, heros) {
    return (state.hero = heros);
  },
  SET_LOADING(state, boolean) {
    return (state.loading = boolean);
  },
  RESET_PRODUCTS(state) {
    return (state.productos = []);
  },
  RESET_PRODUCTS_BY_CATEGORIES(state) {
    return (state.productsByCategories = []);
  }
};

export const actions = {
  async fetchProducts({ commit }, context) {
    commit("RESET_PRODUCTS_BY_CATEGORIES");
    const productos = await this.$storyapi.get("cdn/stories", {
      version: context.version,
      per_page: context.per_page,
      page: context.page,
      starts_with: context.starts_with
    });
    commit(
      "SET_PRODUCTS",
      productos.data.stories.map(producto => {
        return {
          id: producto.slug,
          title: producto.content.title,
          image: producto.content.image[0].filename,
          categoria: producto.content.categorias,
          description: producto.content.description.slice(0, 70)
        };
      })
    );
  },
  async fetchProductsByCategory({ commit }, context) {
    commit("RESET_PRODUCTS");
    const productos = await this.$storyapi.get("cdn/stories", {
      version: context.version,
      per_page: context.per_page,
      page: context.page,
      starts_with: context.starts_with,
      filter_query: context.filter_query
    });
    commit(
      "SET_PRODUCTS_BY_CATEGORIES",
      productos.data.stories.map(producto => {
        return {
          id: producto.slug,
          title: producto.content.title,
          image: producto.content.image[0].filename,
          categoria: producto.content.categorias,
          description: producto.content.description.slice(0, 70)
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
          id: post.slug,
          description: post.content.description
        };
      })
    );
  },
  async fetchHero({ commit }, context) {
    const heros = await this.$storyapi.get("cdn/stories", {
      version: context.version,
      starts_with: context.starts_with
    });
    commit(
      "SET_HEROS",
      heros.data.stories.map(hero => {
        return {
          title: hero.content.title,
          image: hero.content.Image.filename,
          description: hero.content.subtitle
        };
      })
    );
  },
  settingLoading({ commit }, payload) {
    commit("SET_LOADING", payload);
  },
  resetProducts({ commit }) {
    commit("RESET_PRODUCTS");
  },
  resetProductsByCategories({ commit }) {
    commit("RESET_PRODUCTS_BY_CATEGORIES");
  }
};
