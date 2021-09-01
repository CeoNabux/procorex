<template>
  <div class="flex flex-col items-center">
    <h2 class="max-w-screen-xl text-5xl w-full font-bold text-blue-900 ml-4 mt-8">
      Catálogo de productos
    </h2>
    <div class="max-w-screen-xl w-full flex flex-wrap justify-center items-center mt-10">
      <div v-for="(item, i) in catalogos" :key="i" class="flex justify-center items-center w-full md:w-1/3 lg:w-1/5 p-2">
        <catalogue-card :title="item.title" :bgImage="item.bgImage" :link="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import CatalogueCard from "@/components/cards/CatalogueCard.vue"

export default {
  components: {
    CatalogueCard
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'catalogos/'
      })
      .then(res => {
        return {
          catalogos: res.data.stories.map(ct => {
            return {
              id: ct.content.archivo.url,
              title: ct.content.title,
              bgImage: ct.content.image.filename,
            }
        })}
      })
  }
}
</script>