<template>
  <div class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold mb-8 text-green-700">News</h1>
    <div v-if="news?.length" class="space-y-8">
      <div v-for="item in news" :key="item._path" class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
        <NuxtLink :to="item._path" class="block">
          <h2 class="text-2xl font-semibold text-green-800 mb-2">{{ item.title }}</h2>
          <p class="text-gray-500 text-sm mb-2">{{ item.date }}</p>
          <p class="text-gray-700 line-clamp-2">{{ item.description }}</p>
        </NuxtLink>
      </div>
    </div>
    <div v-else class="text-gray-500">まだニュースがありません。</div>
  </div>
</template>

<script setup lang="ts">
const { data: news } = await useAsyncData('news', () => queryCollection('news').all())
</script> 