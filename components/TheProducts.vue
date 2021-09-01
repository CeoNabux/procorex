<template>
  <div class="w-full max-w-screen-xl mt-24 mx-auto">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-900 font-bold mb-6">
        Últimos productos
      </p>
      <div class="w-full flex justify-center items-center">
        <loader :loading="isLoadingProducts" />
      </div>
      <div v-if="!isLoadingProducts" class="w-full px-2 overflow-x-scroll flex justify-between mx-auto py-4">
        <div class="flex flex-1 items-end" v-for="(item, i) in productos.slice(0, 5)" :key="i">
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
</template>

<script>
import ProductCard from "@/components/cards/ProductCard.vue"

export default {
  components: {
    ProductCard
  },
  data: () => ({
    isLoadingProducts: false
  }),
  props: {
    productos: {
      type: Array,
      required: true
    }
  },
  computed: {
    productsLoaded() {
      if(!this.productos.length) {
        return this.isLoadingProducts = true
      } else {
        return this.isLoadingProducts =false
      }
    }
  }
}
</script>