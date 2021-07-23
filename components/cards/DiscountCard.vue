<template>
  <div class="w-full p-2 my-12">
    <div
      class="w-full bg-image rounded-md shadow-md"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    >
      <div class="grid grid-cols-3 grid-rows-1 py-2">
        <div class="flex justify-start flex-col col-start-1 col-span-2 p-1">
          <p class="text-xl md:text-3xl font-bold text-gray-300">
            {{ title }}
          </p>
          <p
            class="text-light my-2 md:my-4 lg:my-8 text-lg md:text-2xl text-blue-300"
          >
            {{ discount }}% Dcto.
          </p>
          <div class="rounded w-3/4">
            <button
              name="Detalle"
              class="bg-green-500 flex justify-center items-center h-8 lg:h-12 text-white py-2 px-4 rounded-lg text-sm focus:outline-none"
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
