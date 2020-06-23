<script>
import { ref, computed } from "vue";

export default {
  setup () {
        const state = ref({ post: {} });

        function setPost(post, id) {
            state.value.post = id;
        }

        async function loadPost(id) {
            const post = await new Promise(resolve => setTimeout(resolve, 1000));
            setPost(post, id);
        }

        const getPost = computed(() => state.value.post);

      return {loadPost, getPost};
  }
}
</script>
