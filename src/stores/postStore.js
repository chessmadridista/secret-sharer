import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', () => {
    const posts = ref([
        {
            "id": 0,
            "title": "A Betrayal of Trust",
            "body": "This is my full story.\n\nI had a close friend who trusted me with their deepest secret. They told me about a personal struggle they were facing, and in a moment of weakness, I shared that information with someone else. It spread quickly, and my friend found out. The look of hurt and betrayal on their face is something I can never forget. We haven’t spoken since, and I regret my actions every day."
        },
        {
            "id": 1,
            "title": "The Unforgivable Lie",
            "body": "This is my full story. A few years ago, I was in a difficult financial situation. Desperate, I lied to my family about needing money for a medical emergency. They came together and gave me what I needed, but I used it for something frivolous instead. To this day, they believe my lie, and I carry the guilt of deceiving the people who care about me most."
        },
        {
            "id": 2,
            "title": "The Accident I Hid",
            "body": "This is my full story. One night, I was driving home after a party, slightly intoxicated. I lost control of the car and hit a parked vehicle. Panicked, I fled the scene and never reported the accident. The owner of the vehicle probably suffered a lot due to my actions, and I’ve kept this secret buried, too ashamed and scared to come forward. The guilt eats at me, knowing I escaped responsibility."
        }
    ]);
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