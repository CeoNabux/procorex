<template>
  <div class="max-w-screen-xl">
    <div class="flex flex-col justify-between items-center">
      <!-- LAST POST -->
      <div class="w-full flex flex-col justify-center items-center bg-image" :style="{backgroundImage: 'url(' + post[0].image + ')'}">
        <p class="text-4xl text-white font-bold text-center">
          {{ post[0].title }}
        </p>
        <p class="text-center text-gray-200 font-semibold">
          {{ post[0].description }}
        </p>
        <a :href="`/blog/${post[0].id}`" class="w-14 h-10 flex justify-center items-center bg-white text-gray-900" >
          Leer más
          <p-icon name="arrowRight" class="text-yellow-600" />
        </a>
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
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'blog/'
      })
      .then(res => {
        console.log(res)
        return {
          post: res.data.stories.map(bp => {
            return {
              id: bp.content.slug,
              title: bp.content.title,
              description: bp.content.description,
              image: bp.content.image.filename
            }
        })}
      })
  }
}
</script>

<style scoped>
.bg-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: linear-gradient(241deg, rgba(255,255,255,0.7679446778711485) 0%, rgba(0,13,191,0.896796218487395) 100%);

}
</style>