<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-300">
    <Header />
    <main class="pt-8">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
</script> 