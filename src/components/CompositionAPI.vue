<template lang="pug">
.siimple-content
    h1 Composition API
    h2 Описание синтаксиса
    CompositionAPISimple

    h2 Использование в качестве стора
    CompositionAPIStateManagement
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    CompositionAPISimple: defineAsyncComponent(() => import('./compositionapi/CompositionAPISimple.vue')),
    CompositionAPIStateManagement: defineAsyncComponent(() => import('./compositionapi/CompositionAPIStateManagement.vue'))
  }
}
</script>

<style lang='scss'>
</style>
