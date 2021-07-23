<template>
  <div class="max-w-screen-xl">
    <h2 class="text-5xl font-bold text-blue-900 ml-4 mt-8">
      Catálogo de productos
    </h2>
    <div class="flex flex-wrap justify-center items-center mt-10">
      <div v-for="(item, i) in catalogos" :key="i" class="flex justify-center items-center w-full md:w-1/3 lg:w-1/5 p-2">
        <collection-card :title="item.title" :image="item.image" :id="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import CollectionCard from "@/components/cards/CollectionCard.vue"

export default {
  components: {
    CollectionCard
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'catalogos/'
      })
      .then(res => {
        console.log(res)
        return {
          catalogos: res.data.stories.map(ct => {
            return {
              id: ct.slug,
              title: ct.content.title,
              image: ct.content.image.filename,
            }
        })}
      })
  }
}
</script>