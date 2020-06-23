<template lang="pug">
.siimple-content

    h1 Multi v-models

    p Name: {{name}}
    p Mail: {{email}}

    FormComponent(
      v-model:name="name"
      v-model:email="email"
    )

</template>

<script>
import FormComponent from './multimodels/FormComponent';

export default {
  name: 'MultiModels',

  data() {
    return {
      name: "",
      email: ""
    }
  },

  components: {
    FormComponent
  }
}
</script>

<style lang='scss'>
</style>
