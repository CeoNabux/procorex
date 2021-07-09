<template>
  <div class="w-full max-w-screen-xl mx-auto mt-16">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-800 font-bold mb-10">
        Chequea nuestro catálogo
      </p>
      <div class="w-full flex flex-wrap justify-center lg:justify-between items-center mx-auto">
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <category-card />
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <category-card />
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <category-card />
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <category-card />
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/5">
          <category-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/components/cards/CategoryCard.vue"
export default {
  components: {
    CategoryCard
  }
}
</script>