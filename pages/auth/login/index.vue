<template>
  <div>
    <div class="bg-cover bg-center w-full bg-no-repeat">
      <Login />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { definePageMeta } from '#imports'
  definePageMeta({
    layout: 'login'
  })
</script>

<style lang="scss">
  .bg-cover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/bg-login.jpg');
  }
</style>
