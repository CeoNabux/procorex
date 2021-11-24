<template>
  <div class="w-full">
    <div
      class="w-full relative py-4 px-2 bg-image flex"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    >
      <div class="w-full flex p-2 justify-center max-w-screen-2xl mx-auto">
        <div class="container w-full flex flex-col justify-between items-center lg:items-start lg:w-3/5">
          <h2
            class="text-blue-700 sm:text-5xl text-7xl font-semibold font-bebas mt-8 w-full lg:w-4/5 mb-2 text-center lg:text-left"
          >
            {{title}}
          </h2>
          <p
            class="my-4 lg:mt-2 text-gray-800 sm:text-3xl text-5xl font-go w-full lg:w-3/5 text-center lg:text-left"
          >
            {{description}}
          </p>
          <div class="mt-3 mx-auto lg:mx-0 w-1/2">
            <p-button name="Contáctanos" class="bg-yellow-500 text-white h-16" @click="redirection" />
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
    image: {
      type: String,
      default: true
    },
  },
  data: () => ({
    bgImage: require('@/assets/bg/bg-1.jpg')
  }),
  methods: {
    redirection() {
      this.$router.push('/contact')
    }
  }
}
</script>

<style scoped>
.bg-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
