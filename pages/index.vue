<template>
  <div>
    <the-hero />
    <the-discounts :list="list" />
    <the-categories />
    <the-products />
    <the-posts-section :lista='posts' />
  </div>
</template>

<script>
export default {
  data: () => ({
    list: [
      {
        bgImage: require("@/assets/general/llaves-no-exif-tinified.jpg"),
        title: 'Taladro marcar Proto m-8000',
        discount: '10'
      }
    ]
  }),
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