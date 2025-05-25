<template>
  <div class="flex flex-col items-center justify-center py-12">
    <div class="w-full max-w-2xl mb-10">
      <carousel />
    </div>
    <div class="flex flex-wrap justify-center gap-6 mt-8 w-full max-w-xl">
      <NuxtLink to="/blogs" class="flex-1 min-w-[140px] px-6 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition text-lg md:text-xl font-semibold text-center">Blogs</NuxtLink>
      <NuxtLink to="/news" class="flex-1 min-w-[140px] px-6 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition text-lg md:text-xl font-semibold text-center">News</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// 特にロジックなし
</script> 