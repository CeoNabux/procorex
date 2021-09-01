<template>
  <button class="w-full text-xl rounded-xl font-semibold text-white" @click="$emit('click', $event)">
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