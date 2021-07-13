<template>
  <div class="w-full max-w-screen-xl mx-auto mt-16">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-900 font-bold mb-10">
        Conoce nuestros últimos productos
      </p>
      <div class="w-full flex flex-wrap justify-center lg:justify-between items-center mx-auto">
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <last-product-card />
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <last-product-card />
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <last-product-card />
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <last-product-card />
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <last-product-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LastProductCard from "@/components/cards/LastProductCard.vue"
export default {
  components: {
    LastProductCard
  }
}
</script>