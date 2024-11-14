<template>
  <div>
    <section class="bg-white py-16">
      <div class="px-4 sm:px-0 mx-auto max-w-screen-lg">
        <h2 class="text-3xl font-bold text-center text-teal-900">
          Our Latest News &amp; Blog
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-8">
          <CardBlogs
            v-for="(data, index) in blog"
            :key="index"
            :datetime="data.datetime"
            :title="data.title"
            :desc="data.desc"
            :img="data.img"
            :class="index === 2 ? 'hidden sm:block' : ''"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'

  const store = useBlogStore()
  const { blog } = storeToRefs(store)
</script>
