<template>
  <div>
    <the-hero />
    <the-discounts :list="discounts" />
    <the-catalogues :array='catalogos' />
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
    const catalogos = await app.$storyapi.get('cdn/stories', {
      starts_with: 'catalogos/'
    })
    return { products: products.data.stories.map((producto) => {
      return {
        id: producto.content.title,
        title: producto.content.title,
        image: producto.content.image.filename,
        categoria: producto.content.categorias,
        description: producto.content.description.slice(0, 40)
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
    }), catalogos: catalogos.data.stories.map((catalogo) => {
      return {
        bgImage: catalogo.content.image.filename,
        link: catalogo.content.archivo.url,
        title: catalogo.content.title
      }
    })
    }
  },
}
</script>