<template>
  <div class="w-full mx-auto border border-gray-200 shadow-md">
    <figure class="w-full flex justify-center items-center">
      <img :src='image' alt="collection-product">
    </figure>
    <p class="text-blue-900 font-semibold text-lg">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  }
}
</script>