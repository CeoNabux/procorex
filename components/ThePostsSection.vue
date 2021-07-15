<template>
  <div class="w-full max-w-screen-xl mx-auto mt-16">
    <div class="w-full flex flex-col justify-center items-center mx-auto">
      <p class=" mx-auto text-4xl text-blue-900 font-bold mb-10">
        Últimas noticias
      </p>
      <div class="w-full flex flex-wrap justify-center lg:justify-between items-center mx-auto">
        <post-preview />
        <post-preview />
        <post-preview />
        <post-preview />
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from "@/components/cards/PostPreview.vue"
export default {
  components: {
    PostPreview
  }
}
</script>
    PostPreview