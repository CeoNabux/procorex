<template>
  <div class="w-full max-w-screen-xl mt-4">
    <p class=" mx-auto text-4xl text-blue-800 font-bold">
      Descuentos especiales
    </p>
    <div class="w-full flex flex-wrap justify-between items-center mx-auto">
      <div class="container w-full lg:w-1/3">
        <discount-card />
      </div>
      <div class="container w-full lg:w-1/3">
        <discount-card />
      </div>
      <div class="container w-full lg:w-1/3">
        <discount-card />
      </div>
    </div>
  </div>
</template>

<script>
import DiscountCard from "@/components/cards/DiscountCard.vue"

export default {
  components: {
    DiscountCard
  }
}
</script>