<template>
  <div class="w-full p-2 my-12">
    <div
      class="w-full bg-image rounded-md shadow-md"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    >
      <div class="grid grid-cols-5 grid-rows-2">
        <div class="flex justify-start flex-col col-start-1 col-span-3 row-start-1 row-span-1 p-1">
          <p class="text-xl md:text-3xl font-bold text-gray-300">
            {{ title }}
          </p>
          <p
            class="text-light my-2 md:my-4 lg:my-8 text-lg md:text-2xl text-blue-300"
          >
            {{ discount }}% Dcto.
          </p>
        </div>
        <div class="col-start-1 col-span-3 flex justify-center items-center row-start-2 row-span-1">
          <div class="rounded w-full h-full mx-auto flex items-center">
            <button
              name="Detalle"
              class="bg-green-500 w-full flex justify-center items-center h-1/2 lg:h-16 text-white py-2 px-4 rounded-lg text-sm focus:outline-none"
              @click="redirection"
            >
              Más Información
              <div class="w-8 h-8 ml-2">
                <p-icon name="whatsApp" class="text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
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
      window.open(`https://api.whatsapp.com/send?phone=593996525883&text=%F0%9F%98%80%20Hola!%20vengo%20de%20su%20web%20y%20quisiera%20saber%20m%C3%A1s%20sobre%20+${this.title}`)
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
