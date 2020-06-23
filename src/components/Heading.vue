<template lang="pug">
.siimple-box
    .siimple-box-title Примеры - примерчики {{ getPost }}
</template>

<script>
import { getPost } from "../store/store";

export default {
  name: 'SuspenseComp',

  data() {
    return {
      photoCount: 12,
      loadPhoto: false
    }
  },

  computed: {
      getPost: () => getPost.value
  }
}
</script>

<style lang='scss'>
</style>
