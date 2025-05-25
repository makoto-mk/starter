import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    about: defineCollection({
      type: 'page',
      source: 'about.md',
    }),
    blogs: defineCollection({
      type: 'page',
      source: 'blogs/**',
    }),
    news: defineCollection({
      type: 'page',
      source: 'news/**',
    }),
  },
})
