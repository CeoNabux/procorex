<template>
  <div class="w-full p-2 my-12">
    <div class="w-full rounded-t-xl bg-yellow-500 py-1 px-2">
      <p class="text-white text-lg text-center">{{ title }}</p>
    </div>
    <div class="bg-white h-2 w-full" />
    <div
      class="bg-image shadow-md h-72 w-full"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    ></div>
    <div class="bg-white h-2 w-full" />
    <button
      name="Detalle"
      class="bg-green-400 w-full flex justify-center items-center h-12 text-white px-4 rounded-b-lg text-sm focus:outline-none"
      @click="redirection"
    >
      Más Información
      <div class="w-6 h-6 ml-2">
        <p-icon name="whatsApp" class="text-white" />
      </div>
    </button>
  </div>
</template>

<script>
import PIcon from "../global/PIcon.vue";
export default {
  components: { PIcon },
  name: "DiscountCard",
  props: {
    title: {
      type: String,
      required: true
    },
    discount: {
      type: String,
      required: true
    },
    bgImage: {
      type: String,
      required: true
    }
  },
  methods: {
    redirection() {
      window.open(
        `https://api.whatsapp.com/send?phone=593996525883&text=%F0%9F%98%80%20Hola!%20vengo%20de%20su%20web%20y%20quisiera%20saber%20m%C3%A1s%20sobre%20+${this.title}`
      );
    }
  }
};
</script>

<style scoped>
.bg-image {
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
