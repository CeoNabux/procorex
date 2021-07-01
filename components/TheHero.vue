<template>
  <div>
    <VueSlickCarousel v-bind='settings'>
      <div v-for="(slide, i) in heroSlides" :key="i">
        <hero-slide
          :title="slide.title"
          :description="slide.description"
          :bg-image="slide.bgImage"
          :image="slide.image"
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
  data: () => ({
    settings: {
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 8000,
      draggable: true,
      infinite: true,
      pauseOnFocus: true,
      speed: 1000,
    },
    heroSlides: [
      {
        image: require('@/assets/general/tools-1.png'),
        bgImage: require('@/assets/bg/bg-1.jpg'),
        title: 'Somos la mejor opción para tu empresa',
        description: 'Procorex trabaja pensando en las mejores soluciones para tu industria'
      },
      {
        image: require('@/assets/general/tools-1.png'),
        bgImage: require('@/assets/bg/bg-2.jpg'),
        title: 'Somos la mejor opción para tu empresa',
        description: 'Procorex trabaja pensando en las mejores soluciones para tu industria'
      },
      {
        image: require('@/assets/general/tools-1.png'),
        bgImage: require('@/assets/bg/bg-3.jpg'),
        title: 'Somos la mejor opción para tu empresa',
        description: 'Procorex trabaja pensando en las mejores soluciones para tu industria'
      },
    ]
  })
}
</script>