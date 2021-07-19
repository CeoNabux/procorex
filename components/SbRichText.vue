<template>
  <div>
    <rich-text-renderer :document="text" />
  </div>
</template>

<script>
export default {
  name: 'SbRichText',
  props: {
    text: {
      type: [String, Object],
      default: ''
    }
  },
  computed: {
    richtext() {
      return typeof this.text === 'String'
        ? this.text
        : this.$storyapi.richTextResolver.render(this.text)
    }
  }
}
</script>