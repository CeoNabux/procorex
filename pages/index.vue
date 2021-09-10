<template>
  <div>
    <the-hero :array='heroSlides' />
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
    heroSlides: [
      {
        image: require('@/assets/general/tools-1.png'),
        title: 'Todo lo que necesitas en herramientas para la industria',
        description: 'A tu lado desde del 2000'
      },
      {
        image: require('@/assets/general/tools-3.jpg'),
        title: 'Somos la mejor opción para tu empresa',
        description: 'Precios competitivos con las mejores marcas'
      },
      {
        image: require('@/assets/general/destornillador-no-bg-no-exif.png'),
        title: 'Soluciones al alcance de un click',
        description: 'Seguimos trabajando para ustedes'
      },
    ]
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
