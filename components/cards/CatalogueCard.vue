<template>
  <div class="w-full h-96 rounded border shadow scale-up">
    <a :href="link" target="_blank">
      <div class="w-full h-5/6 bg-image" :style="{backgroundImage:`url(${bgImage})`}" alt="catalogoImagen" />
      <div class="w-full h-1/6 flex items-center">
        <p class="text-2xl text-gray-500 mx-2">
          {{ title }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    bgImage: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
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
  content: '';
}
.scale-up:hover {
  transform: scale(1.2);
  transition-delay: 300ms;
  transition-duration: 500ms;
}
</style>