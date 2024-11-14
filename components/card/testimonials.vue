<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <img class="rounded-full mx-auto mb-4" height="100" :src="img" width="100" :alt="name"/>
    <p class="text-gray-700">
      "{{ desc }}"
    </p>
    <h3 class="text-xl font-bold text-teal-900 mt-4">
      {{ name }}
    </h3>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    img: string
    desc: string
    name: string
  }>()
</script>
