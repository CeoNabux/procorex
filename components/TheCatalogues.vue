<template>
  <div class="w-full max-w-screen-xl mx-auto mt-16">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-900 font-bold mb-10">
        Chequea nuestro catálogo
      </p>
      <div class="w-full flex flex-wrap justify-center lg:justify-between items-center mx-auto">
        <div v-for="(item, i) in array" :key="i" class="w-full lg:w-1/2">
          <catalogue-card :bgImage='item.bgImage' :title='item.title' :link='item.link' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogueCard from "@/components/cards/CatalogueCard.vue"
export default {
  components: {
    CatalogueCard
  },
  props: {
    array: {
      type: Array,
      required: true
    }
  }
}
</script>