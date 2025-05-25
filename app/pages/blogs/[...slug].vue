<template>
  <div class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold mb-8 text-blue-700">Blogs</h1>
    <div v-if="data" class="space-y-8">
          <h2 class="text-2xl font-semibold text-blue-800 mb-2">{{ data.title }}</h2>
          <p class="text-gray-500 text-sm mb-2">{{ data.date }}</p>
          <p class="text-gray-700 line-clamp-2">{{ data.description }}</p>
    </div>
    <div v-else class="text-gray-500">まだブログ記事がありません。</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(route.path, () => queryCollection('blogs').path(route.path).first())
</script> 