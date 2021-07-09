<template>
  <div class="w-full p-2">
    <div class="w-full p-2 bg-gray-300">
      <div class="grid grid-col-3 grid-row-3">
        <p class="text-blue-800 text-2xl col-start-1">
          Este es un titulo
        </p>
        <p-button name="Más..." class="bg-gray-300 text-blue-600 shadow row-start-2 row-span-1 w-28 h-7 mt-3 text-base" />
        <figure class="col-start-2 col-span-2 row-start-2 row-span-2">
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