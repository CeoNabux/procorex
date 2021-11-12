<template>
  <nuxt-link :to="`blog/${id}`" class="w-72 h-80 shadow-lg rounded-md">
    <div class="w-full relative">
      <div
        class="w-full h-72 bg-image"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      />
      <span
        class="bg-yellow-500 absolute top-0 px-2 py-1 text-base text-white rounded-xl"
        >Blog</span
      >
      <div class="bg-white h-2 w-full" />
      <div class="w-full h-1/6 flex items-center rounded-b-lg bg-yellow-500">
        <p class="text-lg text-white text-left mx-2 w-full">
          {{ title }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    image: {
      title: String,
      required: true
    },
    time: {
      title: String,
      required: true
    },
    title: {
      title: String,
      required: true
    },
    description: {
      title: String,
      required: true
    },
    id: {
      title: String,
      required: true
    }
  }
};
</script>

<style scoped>
.bg-image {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
