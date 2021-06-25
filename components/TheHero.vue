<template>
  <div>
    <VueSlickCarousel v-bind='settings'>
      <div>
        <hero-slide />
      </div>
      <div>
        <hero-slide />
      </div>
      <div>
        <hero-slide />
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
    }
  })
}
</script>