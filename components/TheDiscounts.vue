<template>
  <div class="w-full max-w-screen-xl mt-4 mx-auto my-16">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-900 font-bold mb-6">
        Descuentos especiales
      </p>
      <div
        class="w-full flex flex-wrap justify-center lg:justify-between items-center mx-auto"
      >
        <div
          v-for="(item, i) in list.slice(0,3)"
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
  props: {
    list: {
      type: Array,
      required: true
    }
  }
};
</script>
