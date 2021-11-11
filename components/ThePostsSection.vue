<template>
  <div class="w-full max-w-screen-xl mx-auto mt-16">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-700 font-bold mb-10">
        Últimas noticias
      </p>
      <div class="w-full flex justify-center items-center">
        <loader :loading="isLoadingPosts" />
      </div>
      <div v-if="!isLoadingPosts"  class="w-full flex flex-wrap justify-center lg:justify-between items-center mx-auto">
        <div v-for="(post, i) in lista.slice(0,3)" :key="i" class="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center">
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
import PostPreview from "@/components/cards/PostPreview.vue"
export default {
  components: {
    PostPreview
  },
  data: () => ({
    isLoadingPosts: false
  }),
  props: {
    lista: {
      type: Array,
      required: true
    }
  },
  computed: {
    postsLoaded() {
      if(!this.lista.length) {
        return this.isLoadingPosts = true
      } else {
        return this.isLoadingPosts =false
      }
    }
  }
}
</script>