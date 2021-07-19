<template>
  <a :href="`blog/${id}`" class="w-72 h-80 shadow-lg bg-image rounded-md" :style="{backgroundImage: 'url(' + image + ')'}">
    <div class="w-full h-full flex flex-col justify-between bg-gradient-to-r from-indigo-800">
      <div class="py-2 px-3 my-4 mx-2 lg:m-1 w-full h-full flex flex-col justify-between ">
        <p class="font-semibold text-gray-300 text-right">
          {{ time }}
        </p>
        <div class="w-full">
          <p class="text-2xl font-bold text-white">
            {{ title }}
          </p>
          <p class="font-medium text-gray-300 text-left">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </a>
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
    id : {
      title: String,
      required: true
    }
  }
}
</script>

<style scoped>
.bg-image {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>