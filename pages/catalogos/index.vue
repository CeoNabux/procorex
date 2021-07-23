<template>
  <div class="max-w-screen-xl">
    <h2 class="text-5xl font-bold text-blue-900 ml-4 mt-8">
      Catálogo de productos
    </h2>
    <div class="flex flex-wrap justify-center items-center mt-10">
      <div class="flex justify-center items-center w-full md:w-1/3 lg:w-1/5 p-2">
        <collection-card :title="title" :image="image" />
      </div>
    </div>
  </div>
</template>

<script>
import CollectionCard from "@/components/cards/CollectionCard.vue"

export default {
  components: {
    CollectionCard
  },
  data: () => ({
    image: require("@/assets/general/tools-1.png"),
    title: 'Este es un titulo'
  })
}
</script>