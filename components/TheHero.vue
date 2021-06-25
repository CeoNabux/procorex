<template>
  <div>
    <VueSlickCarousel v-bind='settings'>
      <div class="w-full">
        <div class="w-full relative px-6" :style="{backgroundImage: 'url(' + image + ')'}">
          <div class="w-full grid grid-cols-12 grid-rows-6 gap-y-14 gap-x-8">
            <h2 class="text-blue-700 text-7xl row-start-2 row-span-2 col-start-1 col-span-6 font-semibold">Herramientas locas jaja</h2>
            <p class="text-gray-800 text-lg row-start-4 row-span-2 col-start-1 col-span-4 font-extralight">Este es un contenido de locura, en donde se puede explicar la oferta como tal, por lo que es necesario entender de que va el producto y a quien esta dirigido</p>
            <figure class="col-start-7 col-span-6 row-start-3 row-span-4"><img src="@/assets/general/tools-1.png" alt="tool"></figure>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-full relative px-4" :style="{backgroundImage: 'url(' + image + ')'}">
          <div class="w-full grid grid-cols-12 grid-rows-6 gap-y-14 gap-x-8">
            <h2 class="text-blue-700 text-7xl row-start-2 row-span-2 col-start-1 col-span-6 font-semibold">Herramientas locas jaja</h2>
            <p class="text-gray-800 text-xl row-start-4 row-span-2 col-start-1 col-span-4 font-extralight">Este es un contenido de locura, en donde se puede explicar la oferta como tal, por lo que es necesario entender de que va el producto y a quien esta dirigido</p>
            <figure class="col-start-7 col-span-6 row-start-3 row-span-4"><img src="@/assets/general/tools-1.png" alt="tool"></figure>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel
  },
  data: () => ({
    settings: {
      arrows: true,
      dot: true,
      autoplay: true,
      autoplaySpeed: 8000,
      draggable: true,
      infinite: true,
      pauseOnFocus: true,
      speed: 1000,
    },
    image: require('@/assets/bg/bg-1.jpg')
  })
}
</script>