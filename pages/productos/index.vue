<template>
  <div class="mx-auto max-w-screen-xl">
    <div class="flex flex-col items-center w-full">
      <p class="text-5xl font-bold text-blue-900 w-full my-16">
        Productos
      </p>
      <div class="flex justiy-between items-center w-full">
        <div class="flex justiy-start items-center">
          <p class="text-blue-900 text-base">
            Filtros
          </p>
          <div class="w-6 h-6">
            <p-icon name="filter" class="text-blue-900" />
          </div>
        </div>
        <div class="w-full lg:w-3/5">
          Aqui van los productos
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "productos/"
        // filter_query: "categorias"
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
