<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="flex justify-center items-center">
      <div class="flex flex-wrap w-full bg-white shadow-md pt-4 px-4 pb-8 my-16">
        <div class="w-full lg:w-3/5">
          <figure class="w-full flex justify-center items-center">
            <img :src="featuredImage" alt="tool" />
          </figure>
          <div class="w-full flex justify-start items-center ">
            <button v-for="(img, i) in image" :key="i" class="w-20 mr-2" @click="getImage(img.filename)">
              <figure class="w-full flex justify-center items-center">
                <img :src="img.filename" alt="" />
              </figure>
            </button>
          </div>
        </div>
        <div class="flex flex-col w-full lg:w-2/5">
          <p class="text-5xl font-semibold text-blue-700">
            {{ title }}
          </p>
          <p class="text-xl text-yellow-500 font-medium mt-4">
            {{ description }}
          </p>
          <div class="bg-gray-100 w-full h-px my-12" />
          <div class="flex flex-wrap my-4 text-blue-900 text-lg">
            <sb-rich-text :text="aplication" />
          </div>
          <div class="bg-gray-100 w-full h-px my-16" />
          <p class="text-2xl font-bold text-yellow-600 py-4">$ {{ precio }}</p>
          <p class="text-lg text-blue-900 font-medium">Código: {{ codigo }}</p>
          <p class="text-lg text-blue-900 font-medium">
            Presentación: {{ presentation }}
          </p>
          <button
            class="w-full bg-green-600 flex justify-center items-center rounded-lg py-2 mt-4"
            @click="redirection"
          >
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
  data: () => ({
    featuredImage: ''
  }),
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
          image: res.data.story.content.image,
          title: res.data.story.content.title,
          aplication: res.data.story.content.aplication,
          description: res.data.story.content.description,
          presentation: res.data.story.content.presentation,
          precio: res.data.story.content.precio,
          codigo: res.data.story.content.codigo
        };
      });
  },
  mounted() {
    this.getImage(this.image[0].filename)
  },
  methods: {
    redirection() {
      window.open(
        `https://api.whatsapp.com/send?phone=593996525883&text=%F0%9F%98%80%20Hola!%20vengo%20de%20su%20web%20y%20quisiera%20saber%20m%C3%A1s%20sobre%20+${this.title}`
      );
    },
    getImage(image) {
      this.featuredImage = image
    }
  },
};
</script>
