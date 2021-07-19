<template>
  <div class="max-w-screen-xl">
    <div class="flex flex-col justify-between items-center">
      <!-- LAST POST -->
      <div class="w-full flex justify-center items-center" :style="{backgroundImage: 'url(' + image + ')'}">
        <p class="text-4xl text-white font-bold text-center">
          {{ title }}
        </p>
        <p class="text-center text-gray-200 font-semibold">
          {{ description }}
        </p>
        <button @click="goToPost" class="w-14 h-10 flex justify-center items-center bg-white text-gray-900">
          Leer más
          <p-icon name="arrowRight" class="text-yellow-600" />
        </button>
      </div>
      <!-- GENERAL POSTS -->
      <div class="w-full flex flex-wrap justiy-center items-center">
        <div class="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center">
          <post-preview
            :title="post[0].title"
            :time="post[0].time"
            :image="post[0].image"
            :id="post[0].id"
            :description="post[0].description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '../components/cards/PostPreview.vue'

export default {
  components: { PostPreview },
  data: () => ({
    post: [
      {
        title: 'Maquinas poderosas',
        image: require('@/assets/general/amoladora.png'),
        id: 'primer-post',
        description: 'Aprende a usar las mejores herramientas',
        time: '12-12-21'
      }
    ]
  }),
  methods: {
    goToPost () {
      this.$router.push('/')
    }
  }
}
</script>