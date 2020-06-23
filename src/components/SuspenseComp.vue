<template lang="pug">
.siimple-content
    h1 Suspense

    button.siimple-btn(@click='loadPhoto = !loadPhoto') Загрузить котяток

    .async__wrapper(v-if='loadPhoto')

      Suspense

        template(#default)
          div(v-for="(image, imageIndex) in photoCount")
            AsyncContentLoad(:imgId='imageIndex')

        template(#fallback)
          .siimple-spinner.siimple-spinner--primary
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: 'SuspenseComp',

  components: {
    AsyncContentLoad: defineAsyncComponent(() => import('./suspense/AsyncContentLoad.vue'))
  },

  data() {
    return {
      photoCount: 12,
      loadPhoto: false
    }
  }
}
</script>

<style lang='scss'>
</style>
