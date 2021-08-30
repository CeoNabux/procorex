<template>
  <div>
    <the-hero />
    <the-discounts :list="discounts" />
    <the-categories />
    <the-products :productos='products' />
    <the-posts-section :lista='posts' />
  </div>
</template>

<script>
export default {
  data: () => ({
    discounts: [],
    products: [],
    posts: [],
    heroSlides: []
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
    const home = await app.$storyapi.get('cdn/stories', {
      starts_with: 'home'
    })
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
    }), discounts: discounts.data.stories.map((discount) => {
      return {
        title: discount.content.name,
        bgImage: discount.content.imagen.filename,
        discount: discount.content.porcentage
      }
    }), heroSlides: home.data.stories.map((slide) => {
      return {
        slideImages: slide.content.heroImages.map((image) => image.filename),
        title1: slide.content.slideTitle1
      }
    })
    }
  },
}
</script>