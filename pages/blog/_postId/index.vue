<template>
  <div>
    <div class="bg-image" :style="{backgroundImage: `url(` + image + ')' }">
      <div class="w-full max-w-screen-xl h-80 flex flex-col justify-end items-start bg-gradient-to-t from-green-900 pl-4">
        <p class="text-left text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
          {{ title }}
        </p>
      </div>
    </div>
    <div class="container w-full flex flex-col max-w-screen-xl pl-4">
        <p class="text-left text-gray-800 font-bold text-base md:text-lg mb-2 mt-6">
          Publicado en: <span class="text-yellow-800">{{ date.slice(0, 10) }}</span>
        </p>
        <div class="flex flex-wrap mt-16">
          <sb-rich-text :text='body' />
        </div>
      </div>
  </div>
</template>

<script>
import SbRichText from '@/components/SbRichText.vue'

export default {
  components: {
    SbRichText
  },
  computed: {
    richtext() {
      return typeof this.text === 'string'
        ? this.text
        : this.$storyapi.richTextResolver.render(this.text)
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          image: res.data.story.content.image.filename,
          title: res.data.story.content.title,
          body: res.data.story.content.body,
          date: res.data.story.published_at
        }
      })
  }
}
</script>

<style scoped>
.bg-image {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>


