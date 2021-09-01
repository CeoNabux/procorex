<template>
  <div>
    <the-hero />
    <div class="w-full flex justify-center items-center">
      <loader :loading="isLoading" />
    </div>
    <the-discounts :list="getDiscounts" />
    <the-catalogues :array="getCatalogos" />
    <the-products v-if="!isLoading" :productos="getProductos" />
    <the-posts-section :lista="getPosts" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    isLoading: false,
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
      this.isLoading = true;
      this.fetchCatalogues({
        starts_with: 'catalogos/',
        version: 'published'
      }).finally(() => this.isLoading = false)
    },
  }
};
</script>
