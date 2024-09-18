<script setup>
import { useGeneralStore, usePostStore } from '@/stores'

const generalStore = useGeneralStore()
const postStore = usePostStore()

function viewMore() {
    postStore.increasePostFetchIndices()
    const startIndex = postStore.postStartIndex
    const endIndex = postStore.postEndIndex
    fetch(`http://localhost:5000/get-posts?start=${startIndex}&end=${endIndex}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        generalStore.setSnackbarColor('success')
        generalStore.setSnackbarMessage('New posts have been retrieved successfully.')
    })
    .catch((error) => {
        console.error('Error:', error)
        generalStore.setSnackbarColor('error')
        generalStore.setSnackbarMessage("You have come to the other side of the rabbit hole. There are no more entries available at the moment.")
    })
    .finally(() => {
        generalStore.showSnackbar()
    });

}
</script>
<template>
    <v-container class="text-center">
        <v-btn color="primary" variant="outlined" @click="viewMore">
            View more
        </v-btn>
    </v-container>
</template>