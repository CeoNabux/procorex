<template>
  <div>
    <div class="w-full flex justify-center items-center">
      <loader :loading="!getHero.length" />
    </div>
    <the-hero v-if="getHero.length" :array='getHero' />
    <the-discounts :list="getDiscounts" />
    <the-catalogues :array="getCatalogos" />
    <the-products :productos="getProductos" />
    <the-posts-section :lista="getPosts" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    catalogos: [],
    productos: [],
    posts: [],
    discounts: [],
  }),
  computed: {
    ...mapGetters('getProducts', ['getProductos', 'getPosts', 'getCatalogos', 'getDiscounts', 'getHero']),
  },
  mounted() {
    this.loadHero()
    this.loadProducts()
    this.loadDiscounts()
    this.loadPosts()
    this.loadCatalogues()
  },
  methods: {
    ...mapActions('getProducts', ['fetchProducts', 'fetchCatalogues', 'fetchDiscounts', 'fetchPosts', 'fetchHero']),
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
    loadHero() {
      this.fetchHero({
        starts_with: 'homehero',
        version: 'published'
      })
    }
  }
};
</script>
