<template>
  <div class="w-full p-2 my-12">
    <div class="w-full p-2 bg-gray-100">
      <div class="grid grid-col-3 grid-row-3 gap-x-4 gap-y-8">
        <p class="text-blue-800 text-2xl col-start-1">
          Este es un titulo
        </p>
        <p-button name="Más..." class="bg-gray-100 text-blue-600 shadow row-start-2 row-span-1 w-28 h-7 mt-3 text-base" />
        <figure class="col-start-2 col-span-3 row-start-2 row-span-3">
          <img :src="image" alt="category-tool">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    image: require("@/assets/general/atornillador.png")
  })
}
</script>