<template>
  <div class="flex flex-col items-center">
    <h2 class="max-w-screen-xl text-5xl font-bold text-blue-900 w-full my-16">
      Productos
    </h2>
    <div
      class="max-w-screen-xl flex flex-wrap justify-between items-start w-full px-2"
    >
      <div class="w-full lg:w-1/5">
        <div class="flex flex-start align-items mb-4">
          <p class="text-blue-900 text-base mr-2">
            Filtros
          </p>
          <div class="w-6 h-6">
            <p-icon name="filter" class="text-blue-900" />
          </div>
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
        <div class="w-full flex justify-center items-start">
          <loader
            :loading="!getProductos.length && !getProductsByCategory.length"
          />
        </div>
        <div
          v-if="getProductos.length"
          class="w-full flex flex-wrap justify-between"
        >
          <div
            v-for="(item, i) in getProductos"
            :key="i"
            class="flex justify-center items-end w-full sm:w-1/2 lg:w-1/3"
          >
            <product-card
              :title="item.title"
              :image="item.image"
              :id="item.id"
              :description="item.description"
            />
          </div>
        </div>
        <div
          v-else-if="getProductsByCategory.length"
          class="w-full px-2 flex flex-wrap justify-between mx-auto py-4"
        >
          <div
            v-for="(item, i) in getProductsByCategory"
            :key="i"
            class="flex justify-center items-end w-full sm:w-1/2 lg:w-1/3"
          >
            <product-card
              :title="item.title"
              :image="item.image"
              :id="item.id"
              :description="item.description"
            />
          </div>
        </div>
        <div class="w-full flex justify-center items-center">
          <loader :loading="getLoading" />
        </div>
        <div class="w-full py-2">
          <div class="mx-auto w-64 h-14">
            <p-button
              name="Cargar más"
              class="bg-yellow-500"
              @click="getMoreProducts"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from "@/components/cards/ProductCard.vue";

export default {
  components: {
    ProductCard
  },
  data: () => ({
    isLoading: false,
    initialPage: 1,
    category: ""
  }),
  computed: {
    ...mapGetters("getProducts", [
      "getLoading",
      "getProductos",
      "getProductsByCategory"
    ])
  },
  async asyncData({ app, store }) {
    const categorias = await app.$storyapi.get("cdn/stories", {
      starts_with: "categorias/"
    });
    store.dispatch("getProducts/fetchProducts", {
      starts_with: "productos/",
      version: "published",
      per_page: 6,
      page: 1
    });
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
    ...mapActions("getProducts", ["fetchProductsByCategory", "settingLoading"]),
    productsByCategory(item) {
      this.category = item;
      this.fetchProductsByCategory({
        starts_with: "productos/",
        page: 1,
        per_page: 6,
        filter_query: {
          categorias: {
            all_in_array: item
          }
        }
      });
    },
    getMoreProducts() {
      console.log(this.category);
      this.settingLoading(true);
      if (this.item === "") {
        this.initialPage += 1;
        this.$store.dispatch("getProducts/fetchProducts", {
          starts_with: "productos/",
          version: "published",
          per_page: 6,
          page: this.initialPage
        });
      } else {
        this.initialPage += 1;
        this.$store.dispatch("getProducts/fetchProductsByCategory", {
          starts_with: "productos/",
          version: "published",
          filter_query: {
            categorias: {
              all_in_array: this.item
            }
          },
          per_page: 6,
          page: this.initialPage
        });
      }
      this.settingLoading(false);
    }
  }
};
</script>
