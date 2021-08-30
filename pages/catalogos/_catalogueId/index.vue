<template>
  <div>
    Este seria mi catalogo
    <pdf src="@/assets/pdf/linea-de-productos.pdf" />
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import DocViewer from '../../../components/DocViewer.vue';
export default {
  components: {
    DocViewer,
    pdf
  },
  asyncData(context) {
      return context.app.$storyapi
      .get("cdn/stories/catalogos/" + context.params.catalogueId, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        console.log(res.data.story.content.archivo.filename)
        return {
          pdf: res.data.story.content.archivo.filename
        }
      })
  }
};
</script>
