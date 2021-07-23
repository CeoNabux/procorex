<template>
  <div>
    <clien-only>
      <pdf
        class="border border-red-500"
        :src="file"
        :page="1"
      />
    </clien-only>
  </div>
</template>


<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/catalogos/' + context.params.postId, {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          image: res.data.story.content.image.filename,
          title: res.data.story.content.title,
          file: res.data.story.content.archivo.filename,
          description: res.data.story.description
        }
      })
  }
}
</script>