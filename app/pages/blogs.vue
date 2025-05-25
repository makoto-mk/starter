<template>
  <div class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold mb-8 text-blue-700">Blogs</h1>
    <div v-if="blogs?.length" class="space-y-8">
      <div v-for="blog in blogs" :key="blog._path" class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
        <NuxtLink :to="blog._path" class="block">
          <h2 class="text-2xl font-semibold text-blue-800 mb-2">{{ blog.title }}</h2>
          <p class="text-gray-500 text-sm mb-2">{{ blog.date }}</p>
          <p class="text-gray-700 line-clamp-2">{{ blog.description }}</p>
        </NuxtLink>
      </div>
    </div>
    <div v-else class="text-gray-500">まだブログ記事がありません。</div>
  </div>
</template>

<script setup lang="ts">
const { data: blogs } = await useAsyncData('blogs', () => queryCollection('blogs').all())
</script> 