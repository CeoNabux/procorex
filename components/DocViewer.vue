<template>
  <div>
    <pdf :src='pdfDoc' />
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  },
  props: {
    pdfDoc: {
      type: String,
      required: null
    }
  }
}
</script>

