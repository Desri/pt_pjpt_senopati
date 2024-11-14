<template>
  <div class="bg-white rounded-lg shadow-lg">
    <img :alt="title" class="mb-4 w-full" height="200" :src="img" width="300"/>
    <div class="p-5">
      <h3 class="text-xl font-bold text-teal-900">
        {{ title }}
      </h3>
      <p class="text-gray-700 mt-2">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    desc: string
    img: string
  }>()
</script>
