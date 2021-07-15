<template>
  <div class="w-72 h-80 shadow-lg bg-image rounded-md py-2" :style="{backgroundImage: 'url(' + bgImage + ')'}">
    <div class="w-full h-full flex flex-col justify-between">
      <p class="font-semibold text-gray-200 text-right">
        12-12-21
      </p>
      <div class="w-full">
        <p class="text-2xl font-bold text-white">
          Maquinas poderosas
        </p>
        <p class="font-semibold text-gray-200 text-left">
          Aprende a usar las mejores herramientas...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bgImage: require('@/assets/general/pintura-no-exif-tinified.jpg')
  })
}
</script>

<style scoped>
.bg-image {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>