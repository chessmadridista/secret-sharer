<script setup>
import { useGeneralStore, usePostStore } from '@/stores'
import { onBeforeMount } from 'vue';

const generalStore = useGeneralStore()
const postStore = usePostStore()

function getLatestEntries() {
    const startIndex = postStore.postStartIndex
    const endIndex = postStore.postEndIndex
    let baseUrl
    if (process.env.NODE_ENV === 'development') {
        baseUrl = 'http://127.0.0.1:5000'
    } else if (process.env.NODE_ENV === 'production') {
        baseUrl = 'https://secret-sharer-api.nostalgician.in'
    }
    fetch(`${baseUrl}/get-posts?start=${startIndex}&end=${endIndex}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        postStore.addRetrievedPosts(data.posts)
        generalStore.setSnackbarColor('success')
        generalStore.setSnackbarMessage('Welcome back!')
    })
    .catch((error) => {
        console.error('Error:', error)
        generalStore.setSnackbarColor('error')
        generalStore.setSnackbarMessage("Either there is some issue with the server or with the internet connection.")
    })
    .finally(() => {
        generalStore.showSnackbar()
    });

}

onBeforeMount(() => {
    getLatestEntries()
})
</script>
<template>
    <v-container>
        <v-row v-for="post in postStore.posts" :key="post.id">
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-no-wrap text-blue-grey font-weight-bold">
                        {{ post.title }}
                    </v-card-title>
                    <v-card-text class="card-text">
                        {{ post.body }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.card-text {
    white-space: pre-wrap;
}
</style>