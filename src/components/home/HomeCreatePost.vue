<script setup>
import {ref} from 'vue'
import { usePostStore } from '@/stores'

const title = ref('')
const body = ref('')
const postStore = usePostStore()

function createNewPost() {

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