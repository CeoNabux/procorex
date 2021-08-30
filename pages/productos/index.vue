<template>
  <div class="flex flex-col items-center">
    <h2 class="max-w-screen-xl text-5xl font-bold text-blue-900 w-full my-16">
      Productos
    </h2>
    <div class="max-w-screen-xl flex justiy-between items-start w-full">
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
            class="text-gray-400 font-semibold text-lg mb-2"
            @click="filtroPorCategoria"
          >
            <p class="w-full text-left">{{ categoria.categoria }}</p>
          </button>
        </div>
      </div>
      <!-- AQUI VA LA SECCIONH DE PRODUCTOS -->
      <div class="w-full lg:w-4/5">
        <div class="w-full px-2 flex flex-wrap justify-between mx-auto py-4">
          <div v-for="(item, i) in productos" :key="i">
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
import ProductCard from "@/components/cards/ProductCard.vue";

export default {
  components: {
    ProductCard
  },
  async asyncData({ app }) {
    const productos = await app.$storyapi.get("cdn/stories", {
      starts_with: "productos/"
    });
    const categorias = await app.$storyapi.get("cdn/stories", {
      starts_with: "categorias/"
    });
    return {
      productos: productos.data.stories.map(pr => {
        return {
          id: pr.slug,
          title: pr.content.title,
          image: pr.content.image.filename,
          categoria: pr.content.categorias,
          description: pr.content.description.slice(0, 40)
        };
      }),
      categorias: categorias.data.stories.map(categoria => {
        return {
          categoria: categoria.content.name.charAt(0).toUpperCase() + categoria.content.name.slice(1)
        };
      })
    };
  },
  methods: {
    filtroPorCategoria() {
      console.log(this.categoria.categoria)
    }
  }
};
</script>
