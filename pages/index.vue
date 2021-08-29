<template>
  <div>
    <the-hero />
    <the-discounts :list="list" />
    <the-categories />
    <the-products :productos='products' />
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
    ],
    products: [],
    posts: [],
  }),
  async asyncData({ app }) {
    const products = await app.$storyapi.get('cdn/stories', {
      starts_with: 'productos/'
    })
    const posts = await app.$storyapi.get('cdn/stories', {
      starts_with: 'blog/'
    })
    const discounts = await app.$storyapi.get('cdn/stories', {
      starts_with: 'discounts'
    })
    console.log(products.data.stories, posts.data.stories)
    return { products: products.data.stories.map((pr) => {
      return {
        title: pr.content.title,
        image: pr.content.image.filename,
        id: pr.content.title,
        description: pr.content.description
      }
    }), posts: posts.data.stories.map((post)=> {
      return {
        title: post.content.title,
        image: post.content.image.filename,
        time: post.published_at,
        id: post.content.title,
        description: post.content.description
      }
    }), discounts: discounts.data.stories }
  },
}
</script>