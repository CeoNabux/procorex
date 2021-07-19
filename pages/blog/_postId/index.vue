<template>
  <div>
    <div class="bg-image" :style="{backgroundImage: `url(` + image + ')' }">
      <div class="w-full max-w-screen-xl h-80 flex justify-start items-end bg-gradient-to-t from-green-900">
        <p class="text-left text-white font-bold text-3xl md:text-4xl lg:text-5xl">
          {{ title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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


