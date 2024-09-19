import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', () => {
    const posts = ref([]);
    const postStartIndex = ref(0)
    const postEndIndex = ref(5)

    function createNewPost(post) {
        posts.value = [post, ...posts.value]
    }

    function addRetrievedPosts(retrievedPosts) {
        posts.value  = [...posts.value, ...retrievedPosts]
    }

    function increasePostFetchIndices() {
        postStartIndex.value += 5
        postEndIndex.value += 5
    }

    return {
        posts,
        postStartIndex,
        postEndIndex,
        createNewPost,
        increasePostFetchIndices,
        addRetrievedPosts,
    }
})