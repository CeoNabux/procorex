<template>
  <div class="w-72 flex-none bg-gray-50 py-2 shadow mr-4 card my-12">
    <div class="w-full relative">
      <span class="bg-yellow-500 absolute top-0 px-2 py-1 text-base text-white rounded-xl">Venta</span>
      <figure class="w-full my-1 p-2">
        <img :src="image" alt="tool" srcset="">
      </figure>
      <p class="text-blue-900 font-medium text-lg">
        Atornillador inalámbrico
      </p>
      <p class="text-blue-900 font-light font-sm">
        Black N Decker DE 4.8 V
      </p>
      <div class="w-full mt-4 flex justify-center items-center">
        <div class="w-1/2 h-12">
          <p-button name="Pedir" class="aparecer h-12 bg-yellow-500 text-white text-base" />
        </div>
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

<style scoped>
.aparecer {
  animation-name: appear moveUp;
  animation-delay: 100ms;
  animation-duration: 3000ms;
  animation-fill-mode: forwards;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes moveUp {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px)
  }
}
</style>