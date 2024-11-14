<template>
  <div
    class="p-3 text-white rounded-md bg-center bg-cover bg-no-repeat"
    :class="class"
  >
    <div class="mb-3">
      <h2 class="text-shadow">{{ title }}</h2>
    </div>
    <div>
      <h3 class="font-bold text-xl sm:text-3xl text-shadow">{{ count }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    count: string
    class: string
  }>()
</script>
