<script setup>
import {ref} from 'vue'
import { usePostStore, useGeneralStore } from '@/stores'

const title = ref('')
const body = ref('')
const generalStore = useGeneralStore()
const postStore = usePostStore()

function createNewPost() {
    const post = {
        id: postStore.posts.length,
        title: title.value,
        body: body.value,
    }
    postStore.createNewPost(post)
    title.value = ''
    body.value = ''
    generalStore.setSnackbarMessage('The post has been created successfully.')
    generalStore.setSnackbarColor('success')
    generalStore.showSnackbar()
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-primary">Create post</v-card-title>
                    <v-card-text>
                        <v-textarea
                            label="Title"
                            v-model="title"
                            rows="1"
                            auto-grow
                        />
                        <v-textarea
                            label="Body"
                            v-model="body"
                            rows="4"
                            auto-grow
                        />
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn
                            @click="createNewPost"
                            prepend-icon="mdi-check"
                            color="primary"
                        >
                            Create
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>