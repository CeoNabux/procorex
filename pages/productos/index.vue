<template>
  <div class="flex flex-col items-center">
    <h2 class="max-w-screen-xl text-5xl font-bold text-blue-900 w-full my-16">
      Productos
    </h2>
    <div class="max-w-screen-xl flex justiy-between items-start w-full">
      <div class="flex justiy-between items-center w-full lg:w-1/5">
        <p class="text-blue-900 text-base">
          Filtros
        </p>
        <div class="w-6 h-6">
          <p-icon name="filter" class="text-blue-900" />
        </div>
      </div>
      <!-- AQUI VA LA SECCIONH DE PRODUCTOS -->
      <div class="w-full lg:w-4/5">
        <div
          class="w-full px-2 flex flex-wrap justify-between mx-auto py-4"
        >
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
import ProductCard from "@/components/cards/ProductCard.vue"

export default {
  components: {
    ProductCard
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "productos/"
      })
      .then(res => {
        console.log(res);
        return {
          productos: res.data.stories.map(ct => {
            return {
              id: ct.slug,
              title: ct.content.title,
              image: ct.content.image.filename,
              description: ct.content.description.slice(0, 40)
            };
          })
        };
      });
  }
};
</script>
