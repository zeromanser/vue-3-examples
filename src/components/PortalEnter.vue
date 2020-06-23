<template lang="pug">
.siimple-content

    h1 Portal
    button.siimple-btn(@click='showTeleport = !showTeleport') Сквозь вселенную!

    h2 Точка входа

    div(v-if='showTeleport')
      teleport(to='#destination')
          p Фигаро здесь, Фигаро там
</template>

<script>
import PortalContent from './portal/PortalContent';

export default {
  name: 'PortalEnter',

  data() {
    return {
      showTeleport: false
    }
  },

  components: {
    PortalContent
  }
}
</script>

<style lang='scss'>
</style>
