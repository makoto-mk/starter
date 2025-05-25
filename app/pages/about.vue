<template>
  <div class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold mb-8 text-blue-700">About</h1>
    <div v-if="about" class="space-y-8">
          <h2 class="text-2xl font-semibold text-blue-800 mb-2">{{ blog.title }}</h2>
          <p class="text-gray-500 text-sm mb-2">{{ blog.date }}</p>
          <p class="text-gray-700 line-clamp-2">{{ blog.description }}</p>
    </div>
    <div v-else class="text-gray-500">まだAbouut記事がありません。</div>
  </div>
</template>

<script setup lang="ts">
const { data: about } = await useAsyncData('about', () => queryContent('about'))
</script> 