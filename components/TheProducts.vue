<template>
  <div class="w-full max-w-screen-xl mt-16 mx-auto">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-900 font-bold mb-6">
        Últimos productos
      </p>
      <div class="w-full px-2 overflow-x-scroll flex justify-between mx-auto py-4">
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
</template>

<script>
import ProductCard from "@/components/cards/ProductCard.vue"

export default {
  components: {
    ProductCard
  },
  props: {
    productos: {
      type: Array,
      required: true
    }
  }
}
</script>