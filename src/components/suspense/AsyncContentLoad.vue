<template lang="pug">
div.kitten
  img(
    :src='kittenSrc'
    )

</template>

<script>
import { ref, computed } from "vue";

export default {
    props: {
        imgId: Number
    },

    async setup(props) {
        const kittenSrc = ref('');

        const kittenSize = computed(() => {
          return ("0" + props.imgId).slice(-2);
        });

        const getImage = new Promise(resolve => {
          const image = new Image();

          image.src = `http://placekitten.com/2${kittenSize.value}/2${kittenSize.value}`;

          image.onload = () => {
            setTimeout(() => {
              resolve(image)
            }, 1200);
          };

        });

        await getImage.then(data => kittenSrc.value = data.src);

        return {kittenSrc}
    }
}
</script>

<style lang='scss'>
.kitten {
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
