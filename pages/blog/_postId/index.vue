<template>
  <div>
    Hola este es un nuevo blog
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


