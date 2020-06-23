<template lang="pug">
div.form-field

  div.siimple-field
    div.siimple-field-label Name
    input.siimple-input(:value="name" @input="updateName($event.target.value)")

  div.siimple-field
    div.siimple-field-label Email
    input.siimple-input(:value="email" @input="updateEmail($event.target.value)")

</template>

<script>

export default {
  props: {
      name: String,
      email: String
    },
    setup(props, { emit }) {
      const updateName = value => {
        emit('update:name', value)
      }
      const updateEmail = value => {
        emit('update:email', value)
      }
      return { updateName, updateEmail }
    }
  }
</script>

<style lang='scss'>
.form-field {
  input {
    margin: 0 10px;
  }
}
</style>
