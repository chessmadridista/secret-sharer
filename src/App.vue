<script setup>
import { RouterView, useRouter } from 'vue-router'
import AppSnackbar from '@/components/app/AppSnackbar.vue'
import AppHeader from '@/components/app/AppHeader.vue'

const router = useRouter()

</script>
<template>
  <v-app>
    <AppSnackbar />
    <AppHeader />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
<style scoped>
.v-main {
  background: rgb(237, 241, 255);
}
</style>