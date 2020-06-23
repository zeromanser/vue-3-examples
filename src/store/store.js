import {ref, computed} from 'vue';

const state = ref({post: '2020'});

// мутация
function setPost(post, id) {
    state.value.post = id;
}

// экшен
async function loadPost(id) {
    const post = await new Promise((resolve) => setTimeout(resolve, 1000));
    setPost(post, id);
}

// геттер
const getPost = computed(() => {
    console.log(state.value.post);
    return state.value.post;
});

// const history = [];
// watch(state.value, newState => history.push(newState.post));

export {
  loadPost,
  getPost
}