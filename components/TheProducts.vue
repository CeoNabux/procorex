<template>
  <div class="w-full max-w-screen-xl mt-4 mx-auto">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-900 font-bold mb-6">
        Últimos productos
      </p>
      <div class="w-full flex justify-between items-center mx-auto overflow-x-auto">
        <div class="w-full lg:w-1/3">
          <product-card />
        </div>
        <div class="w-full lg:w-1/3">
          <product-card />
        </div>
        <div class="w-full lg:w-1/3">
          <product-card />
        </div>
        <div class="w-full lg:w-1/3">
          <product-card />
        </div>
        <div class="w-full lg:w-1/3">
          <product-card />
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
  }
}
</script>