<template>
  <div>
    <p class="text-xl">{{ title }}</p>
    <client-only>
      <div
        v-if="loadedRatio > 0 && loadedRatio < 1"
        style="background-color: green; color: white; text-align: center"
        :style="{ width: loadedRatio * 100 + '%' }"
      >
        {{ Math.floor(loadedRatio * 100) }}%
      </div>
      <pdf
        v-if="file"
        class="border border-red-500"
        :src="local"
        ref="pdf"
        :page="page"
        :rotate="rotate"
        @password="password"
        @progress="loadedRatio = $event"
        @error="error"
        @num-pages="numPages = $event"
        @link-clicked="page = $event"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
    loadedRatio: 0,
    page: 1,
    numPage: 0,
    rotate: 0,
    local: "http://localhost:3000/assets/pdf/linea-de-productos.pdf"
  }),
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/catalogos/" + context.params.catalogueId, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        console.log(res);
        console.log(res.data.story.content.archivo.filename)
        return {
          image: res.data.story.content.image.filename,
          title: res.data.story.content.title,
          file: res.data.story.content.archivo.filename,
          description: res.data.story.description
        };
      })
  },
  methods: {
    password: function(updatePassword, reason) {
      updatePassword(promt('password is "test"'));
    },
    error: function(err) {
      console.log(err);
    }
  }
};
</script>
