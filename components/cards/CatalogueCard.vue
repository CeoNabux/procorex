<template>
  <div class="w-full h-96 rounded border shadow scale-up">
    <a :href="link" target="_blank">
      <div class="w-full h-1/6 flex items-center rounded-t-lg bg-yellow-500">
        <p class="text-2xl text-white text-center mx-2">
          {{ title }}
        </p>
      </div>
      <div class="bg-white h-2 w-full" />
      <div class="w-full h-5/6 bg-image" :style="{backgroundImage:`url(${bgImage})`}" alt="catalogoImagen" />
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