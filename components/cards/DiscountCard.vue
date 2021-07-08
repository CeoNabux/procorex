<template>
  <div class="w-full shadow-md">
    <div class="w-full bg-image py-6 rounded-md" :style="{backgroundImage: 'url(' + bgImage + ')'}">
      <div class="grid grid-cols-3 grid-rows-1">
        <div class="flex justify-start flex-col col-start-1 col-span-2 p-1">
          <p class="text-3xl font-bold text-gray-300">
            Taladro marcar Proto m-8000
          </p>
          <p class="text-light my-8 text-2xl text-blue-300">
            10% Dcto.
          </p>
          <div class="container rounded 3xl">
            <p-button name="Detalle" class="bg-blue-800 h-12 text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscountCard",
  data: () => ({
    bgImage: require("@/assets/general/llaves-no-exif-tinified.jpg")
  })
}
</script>

<style scoped>
.bg-image {
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>