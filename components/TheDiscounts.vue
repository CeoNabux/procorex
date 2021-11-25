<template>
  <div class="w-full max-w-screen-xl mx-auto my-16 mt-24">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl md:text-5xl lg:text-6xl text-blue-700 font-bebas mb-3 lg:mb-6">
        Descuentos especiales
      </p>
      <div class="w-full flex justify-center items-center">
        <loader :loading="isLoading" />
      </div>
      <div
        v-if="!isLoading"
        class="w-full flex flex-wrap justify-center lg:justify-between items-center mx-auto"
      >
        <div
          v-for="(item, i) in list.slice(0, 3)"
          :key="i"
          class="w-full lg:w-1/3"
        >
          <discount-card
            :title="item.title"
            :bgImage="item.bgImage"
            :discount="item.discount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiscountCard from "@/components/cards/DiscountCard.vue";

export default {
  components: {
    DiscountCard
  },
  data: () => ({
    isLoading: false
  }),
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    loaded() {
      if (!this.list.length) {
        return (this.isLoading = true);
      } else {
        return (this.isLoading = false);
      }
    }
  }
};
</script>
