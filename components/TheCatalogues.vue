<template>
  <div class="w-full max-w-screen-xl mx-auto mt-24">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-700 font-bold mb-10">
        Chequea nuestro catálogo
      </p>
      <div class="w-full flex justify-center items-center">
        <loader :loading="isLoadingCatalogues" />
      </div>
      <div v-if="!isLoadingCatalogues" class="w-full flex flex-wrap justify-center lg:justify-between items-center mx-auto">
        <div v-for="(item, i) in array" :key="i" class="w-full px-2 lg:w-1/2 lg:px-0">
          <catalogue-card :bgImage='item.bgImage' :title='item.title' :link='item.link' />
        </div>
      </div>
      <div class="flex mt-16 justify-center items-center">
        <button class="h-20 bg-yellow-500 text-lg font-semibold text-white px-6 py-3 rounded-md" @click="redirection">
          Ver Catálogos
        </button>
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
  data: () => ({
    isLoadingCatalogues: false
  }),
  props: {
    array: {
      type: Array,
      required: true
    }
  },
  computed: {
    loaded() {
      if (!this.array.length) {
        return (this.isLoadingCatalogues = true);
      } else {
        return (this.isLoadingCatalogues = false);
      }
    }
  },
  methods: {
    redirection() {
      this.$router.push('/catalogos/')
    }
  }
}
</script>