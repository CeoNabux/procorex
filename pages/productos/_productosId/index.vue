<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="flex justify-center items-center">
      <div class="flex flex-wrap w-full px-4 my-16">
        <figure class="w-full lg:w-3/5 flex justify-center items-center">
          <img :src="image" alt="tool" />
        </figure>
        <div class="flex flex-col w-ful lg:w-2/5">
          <p class="text-4xl font-semibold text-blue-900">
            {{ title }}
          </p>
          <p class="text-sm text-gray-400 font-medium mt-4">
            {{ description }}
          </p>
          <div class="flex flex-wrap my-8">
            <sb-rich-text :text="aplication" />
          </div>
          <p class="text-2xl font-bold text-yellow-600 py-4">
            $ 100
          </p>
          <p class="text-lg font-light text-gray-500">
            Presentación: {{ presentation }}
          </p>
          <button class="w-full bg-green-600 flex justify-center items-center rounded-lg py-2 mt-4">
            <p class="text-sm font-semibold text-white">
              Pidelo por WhatsApp
            </p>
            <div class="w-8 h-8">
              <p-icon name="whatsApp" class="text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SbRichText from "@/components/SbRichText.vue";

export default {
  components: {
    SbRichText
  },
  computed: {
    richtext() {
      return typeof this.text === "string"
        ? this.text
        : this.$storyapi.richTextResolver.render(this.text);
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/productos/" + context.params.productosId, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        return {
          image: res.data.story.content.image.filename,
          title: res.data.story.content.title,
          aplication: res.data.story.content.aplication,
          description: res.data.story.content.description,
          presentation: res.data.story.content.presentation,
        };
      });
  }
};
</script>
