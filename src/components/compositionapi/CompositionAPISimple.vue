<template lang="pug">
.counter
    p {{count}}
    button.siimple-btn(@click="increase") Прибавить
    button.siimple-btn(@click="decrease") Вычесть
</template>

<script>
import { ref } from "vue";

export default {
    setup () {
        const count = ref(3)

        function increase() {
            count.value++;
        }

        function decrease() {
            count.value--;
        }

        return {increase, decrease, count};
    }
}
</script>

<style lang='scss'>
.counter {
    button {
        margin: 0 10px;
    }
}
</style>
