<template>
  <div class="w-full">
    <div
      class="w-full relative px-6"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    >
      <div class="w-full grid grid-cols-12 grid-rows-6 gap-y-14 gap-x-8">
        <h2
          class="text-blue-700 text-7xl row-start-2 row-span-2 col-start-1 col-span-6 font-semibold"
        >
          Herramientas locas jaja
        </h2>
        <p
          class="text-gray-800 text-lg row-start-4 row-span-2 col-start-1 col-span-4 font-extralight"
        >
          Este es un contenido de locura, en donde se puede explicar la oferta
          como tal, por lo que es necesario entender de que va el producto y a
          quien esta dirigido
        </p>
        <figure class="col-start-7 col-span-6 row-start-3 row-span-4">
          <img src="@/assets/general/tools-1.png" alt="tool" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    image: require('@/assets/bg/bg-1.jpg')
  })
}
</script>
