import Vue from 'vue'
import VueRichTextRenderer from "@marvr/storyblok-rich-text-vue-renderer";
import _postId from '@/pages/blog/_postId/index'

Vue.use(VueRichTextRenderer), {
  resolvers: {
    _postId
  }
}