<template>
  <div>
    Esta es la pagina de las categorias
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "categorias/"
      })
      .then(res => {
        console.log(res);
        // return {
        //   catalogos: res.data.stories.map(ct => {
        //     return {
        //       id: ct.slug,
        //       title: ct.content.title,
        //       image: ct.content.image.filename
        //     };
        //   })
        // };
      });
  }
};
</script>
