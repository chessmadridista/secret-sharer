<script setup>
import {usePostStore} from '@/stores'

const postStore = usePostStore()
</script>
<template>
    <v-container>
        <v-row v-for="post in postStore.posts" :key="post.id">
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-blue-grey font-weight-bold">
                        {{ post.title }}
                    </v-card-title>
                    <v-card-text>
                        {{ post.body }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>