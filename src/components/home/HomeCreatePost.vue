<script setup>
import {ref} from 'vue'
import { usePostStore, useGeneralStore } from '@/stores'
import { v4 as uuidv4 } from 'uuid';
import { inject } from 'vue';

const axios = inject('axios')
const title = ref('')
const body = ref('')
const titleInput = ref(null)
const bodyInput = ref(null)
const generalStore = useGeneralStore()
const postStore = usePostStore()

async function createNewPost() {
    const isTitleValid = !(Object.keys(await titleInput.value.validate()).length)
    const isBodyValid = !(Object.keys(await bodyInput.value.validate()).length)

    if (isTitleValid && isBodyValid) {
        const id = uuidv4()
        const post = {
            id: id,
            title: title.value,
            body: body.value,
        }
        const endPoint = '/submit-post'
        const formData = new FormData()
        formData.append('post_title', title.value)
        formData.append('post_body', body.value)
        axios.post(endPoint, formData)
        .then((response) => {
            console.log(response);
            generalStore.setSnackbarMessage('The post has been created successfully.')
            generalStore.setSnackbarColor('success')
            postStore.createNewPost(post)
            title.value = null
            body.value = null
        })
        .catch((error) => {
            console.error(error);
            generalStore.setSnackbarMessage('There was some error while creating the post.')
            generalStore.setSnackbarColor('error')
        })
        .finally(() => {
            generalStore.showSnackbar()
        })
    }
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-primary">Create post</v-card-title>
                    <v-card-text class="mt-6">
                        <v-textarea
                            ref="titleInput"
                            density="compact"
                            label="Title"
                            v-model="title"
                            rows="1"
                            auto-grow
                            :rules="[v => !!v || 'Title is required.']"
                        />
                        <v-textarea
                            ref="bodyInput"
                            density="compact"
                            label="Body"
                            v-model="body"
                            rows="4"
                            auto-grow
                            :rules="[v => !!v || 'Body is required.']"
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