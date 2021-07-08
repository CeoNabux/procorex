<template>
  <div class="w-full">
    <div
      class="w-full relative py-4 px-2 bg-image"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    >
      <div class="w-full flex p-2 justify-center">
        <div class="container w-full flex flex-col justify-between items-center lg:items-start lg:w-3/5">
          <h2
            class="text-blue-700 text-5xl font-semibold mt-8 w-full lg:w-4/5 mb-2 text-center lg:text-left"
          >
            {{title}}
          </h2>
          <p
            class="my-4 lg:mt-2 text-gray-800 text-3xl font-light w-full lg:w-3/5 text-center lg:text-left"
          >
            {{description}}
          </p>
          <div class="mt-3 mx-auto lg:mx-0 w-1/2">
            <p-button name="Contáctanos" class="bg-yellow-600" />
          </div>
        </div>
        <figure class="w-2/5 hidden lg:flex justify-center items-end">
          <img :src="image" alt="tool" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: true
    },
    description: {
      type: String,
      default: true
    },
    bgImage: {
      type: String,
      default: true
    },
    image: {
      type: String,
      default: true
    }
  },
}
</script>

<style scoped>
.bg-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
