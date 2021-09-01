<template>
  <div>
    <the-hero />
    <the-discounts :list="getDiscounts" />
    <the-catalogues :array="getCatalogos" />
    <the-products :productos="getProductos" />
    <the-posts-section :lista="posts" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    catalogos: [],
    productos: [],
    posts: [],
    discounts: []
  }),
  computed: {
    ...mapGetters('getProducts', ['getProductos', 'getPosts', 'getCatalogos', 'getDiscounts'])
  },
  mounted() {
    this.loadProducts()
    this.loadDiscounts()
    this.loadPosts()
    this.loadCatalogues()
  },
  methods: {
    ...mapActions('getProducts', ['fetchProducts', 'fetchCatalogues', 'fetchDiscounts', 'fetchPosts']),
    loadProducts() {
      this.fetchProducts({
        starts_with: 'productos',
        version: 'published'
      })
    },
    loadDiscounts() {
      this.fetchDiscounts({
        starts_with: 'discounts',
        version: 'published'
      })
    },
    loadPosts() {
      this.fetchPosts({
        starts_with: 'blog/',
        version: 'published'
      })
    },
    loadCatalogues() {
      this.fetchCatalogues({
        starts_with: 'catalogos/',
        version: 'published'
      })
    },
  }
};
</script>
