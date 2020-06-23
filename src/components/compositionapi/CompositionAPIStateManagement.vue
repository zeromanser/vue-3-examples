<template lang="pug">
.get-post
    input.siimple-input(v-model="inputData")
    button.siimple-btn(@click="loadPostData") Загрузить пост
</template>

<script>
import { ref } from "vue";
import { loadPost } from "../../store/store";

export default {
    setup() {
        const inputData = ref(2020);

        const loadPostData = () => loadPost(inputData.value);
        return { inputData, loadPostData };
    }
}
</script>

<style lang='scss'>
.get-post {
    button {
        margin: 0 20px;
    }
}
</style>
