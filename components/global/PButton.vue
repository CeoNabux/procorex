<template>
  <button class="w-full text-xl rounded-xl h-16 font-semibold text-blue-600" @click="$emit('click', $event)">
    {{name}}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  }
}
</script>