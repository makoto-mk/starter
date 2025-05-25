<template>
  <section id="carousel" class="w-full flex flex-col items-center py-8">
    <div class="w-full max-w-2xl relative">
      <div class="overflow-hidden rounded-2xl shadow-lg">
        <img :src="images[current]" class="w-full h-64 object-cover transition-all duration-500" alt="carousel image" />
      </div>
      <button @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow transition"><span class="text-2xl">&#8592;</span></button>
      <button @click="next" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow transition"><span class="text-2xl">&#8594;</span></button>
      <div class="flex justify-center gap-2 mt-4">
        <span v-for="(img, i) in images" :key="i" class="w-3 h-3 rounded-full" :class="i === current ? 'bg-blue-600' : 'bg-gray-300'" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  '/sample1.svg',
  '/sample2.svg',
  '/sample3.svg',
]
const current = ref(0)
const next = () => { current.value = (current.value + 1) % images.length }
const prev = () => { current.value = (current.value - 1 + images.length) % images.length }
</script> 