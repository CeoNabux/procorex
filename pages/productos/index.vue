<template>
  <div class="flex flex-col items-center">
    <h2 class="max-w-screen-xl text-5xl font-bold text-blue-900 w-full my-16">
      Productos
    </h2>
    <div class="max-w-screen-xl flex flex-wrap justify-between items-start w-full px-2">
      <div class="w-full lg:w-1/5">
        <div class="flex flex-start align-items mb-4">
          <p class="text-blue-900 text-base mr-2">
            Filtros
          </p>
          <div class="w-6 h-6">
            <p-icon name="filter" class="text-blue-900" />
          </div>
          <button @click="refresh">refresca</button>
        </div>
        <div class="flex flex-col w-full">
          <button
            v-for="(categoria, i) in categorias"
            :key="i"
            class="text-gray-400 font-semibold text- mb-2"
            @click="productsByCategory(categoria.uid)"
          >
            <p class="w-full text-left">{{ categoria.categoria }}</p>
          </button>
        </div>
      </div>
      <!-- AQUI VA LA SECCIONH DE PRODUCTOS -->
      <div class="w-full lg:w-4/5">
        <div v-if="!getProductos" class="w-full px-2 flex flex-wrap justify-between mx-auto py-4">
          <div v-for="(item, i) in getProductos" :key="i" class="flex justify-center items-end w-full sm:w-1/2 lg:w-1/3">
            <product-card
              :title="item.title"
              :image="item.image"
              :id="item.id"
              :description="item.description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from "@/components/cards/ProductCard.vue";

export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters('getProducts', ['getProductos'])
  },
  async asyncData({ app, store }) {
    const categorias = await app.$storyapi.get("cdn/stories", {
      starts_with: "categorias/"
    });
    store.dispatch('getProducts/fetchProducts', {
      starts_with: 'productos/',
      version: 'published'
    })
    return {
      categorias: categorias.data.stories.map(categoria => {
        return {
          categoria:
            categoria.content.name.charAt(0).toUpperCase() +
            categoria.content.name.slice(1),
          uid: categoria.uuid
        };
      })
    };
  },
  methods: {
    async productsByCategory(item) {
      const productos = await this.$storyapi.get("cdn/stories", {
        starts_with: "productos/",
        filter_query: {
          categorias: {
            all_in_array: item
          }
        }
      });
      return {
        productos: productos.data.stories.map(producto => {
          return {
            id: producto.content.title,
            title: producto.content.title,
            image: producto.content.image.filename,
            categoria: producto.content.categorias,
            description: producto.content.description.slice(0, 40)
          };
        })
      };
    },
    refresh() {
      this.$nuxt.refresh()
    }
  }
};
</script>
