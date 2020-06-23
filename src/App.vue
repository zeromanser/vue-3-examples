<template lang="pug">
.wrapper
  Heading
  
  CompositionAPI

  SuspenseComp


  .siimple-content(align="center")
    h1 Fragments
    ul.siimple-list
      HelloFragment

  h2 Точка выхода телепорта
  #destination

  PortalEnter

  MultiModels

</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: 'App',

  data() {
    return {
      photoCount: 12,
      loadPhoto: false
    }
  },
  
  components: {
    Heading: defineAsyncComponent(() => import('./components/Heading.vue')),
    HelloFragment: defineAsyncComponent(() => import('./components/HelloFragment.vue')),
    SuspenseComp: defineAsyncComponent(() => import('./components/SuspenseComp.vue')),
    CompositionAPI: defineAsyncComponent(() => import('./components/CompositionAPI.vue')),
    PortalEnter: defineAsyncComponent(() => import('./components/PortalEnter.vue')),
    MultiModels: defineAsyncComponent(() => import('./components/MultiModels.vue'))
  }
}
</script>

<style lang='scss'>
@import "siimple/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.async {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px 0;
  }
}

.siimple-list {
  max-width: 300px;
  padding: 0;
}
</style>
