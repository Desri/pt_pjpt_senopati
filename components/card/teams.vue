<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <img :src="img" class="rounded-full mx-auto mb-4" height="150" :alt="name" width="150"/>
    <h3 class="text-xl font-bold text-teal-900">
      {{ name }}
    </h3>
    <p class="text-gray-700">
      {{ position }}
    </p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    img: string
    name: string
    position: string
  }>()
</script>
