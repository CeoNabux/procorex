<template>
  <div class="max-w-screen-xl">
    <div class="flex flex-col justify-between items-center">
      <!-- LAST POST -->
      <div class="w-full flex justify-center items-center bg-image mb-16" :style="{backgroundImage: 'url(' + posts[0].image + ')'}">
        <div class="w-full flex-col justify-center items-center bg-gradient-to-r from-yellow-900 py-8">
          <p class="text-4xl text-white font-bold text-center">
            {{ posts[0].title }}
          </p>
          <p class="text-center text-gray-200 font-semibold my-8">
            {{ posts[0].description }}
          </p>
          <a :href="`/blog/${posts[0].id}`" class="w-36 h-10 rounded mx-auto flex justify-evenly items-center bg-white" >
            <p class="text-gray-800 text-base">
              Leer más
            </p>
            <div class="w-4 h-4">
              <p-icon name="arrowRight" class="text-yellow-600" />
            </div>
          </a>
        </div>
      </div>
      <!-- GENERAL POSTS -->
      <div class="w-full flex flex-wrap justiy-center items-center">
        <div v-for="(post, i) in posts" :key="i" class="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center">
          <post-preview
            :title="post.title"
            :time="post.time"
            :image="post.image"
            :id="post.id"
            :description="post.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '../../components/cards/PostPreview.vue'

export default {
  components: { PostPreview },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'blog/'
      })
      .then(res => {
        console.log(res)
        return {
          posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              description: bp.content.description,
              image: bp.content.image.filename,
              time: bp.published_at
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
}
</style>