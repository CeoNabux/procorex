<template>
  <div>
    Este seria mi catalogo
  </div>
</template>

<script>
export default {
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
  }
};
</script>
