<template>
  <div>
    <div class="flex overflow-hidden bg-gray-50">
      <AdminMenu />
      <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64">
        <AdminDashboard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { definePageMeta } from '#imports'
  definePageMeta({
    layout: 'dashboard',
    middleware: ['auth']
  })
</script>

<style lang="scss"></style>
