<template>
  <div>
    <VueSlickCarousel v-bind='settings'>
      <div v-for="(item, i) in array" :key="i">
        <hero-slide
          :title="item.title"
          :description="item.description"
          :image="item.image"
        />
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
  props: {
    array: {
      type: Array,
      require: true
    }
  },
  data: () => ({
    settings: {
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 6000,
      draggable: true,
      infinite: true,
      pauseOnFocus: true,
      speed: 1000,
    }
  })
}
</script>