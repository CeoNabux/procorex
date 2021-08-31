<template>
  <RingLoader color="#f59e0b" :loading="loading" />
</template>

<script>
import { RingLoader } from 'vue-spinners-css'
export default {
  components: {
    RingLoader
  },
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>