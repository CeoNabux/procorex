<template>
  <div class="w-full">
    <div
      class="w-full relative py-2 md:py-0 px-0 md:px-6"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    >
      <div class="w-full grid grid-cols-12 grid-rows-4 md:grid-rows-6 gap-y-4 md:gap-y-14 gap-x-2 md:gap-x-8">
        <h2
          class="text-blue-700 text-5xl row-start-1 row-span-3 col-start-2 col-span-10 md:col-start-3 md:col-span-7 md:row-start-2 md:row-span-2 lg:col-start-1 lg:col-span-6 font-semibold"
        >
          {{title}}
        </h2>
        <p
          class="text-gray-800 text-xl font-semibold row-start-4 row-span-2 col-start-2 col-span-10 md:col-start-3 md:col-span-7 lg:col-start-1 lg:col-span-4"
        >
          {{description}}
        </p>
        <figure class="col-start-7 col-span-6 row-start-3 row-span-4 hidden lg:block">
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
