<template>
  <div class="bg-white rounded-lg shadow-lg">
    <img :alt="title" class="w-full" height="200" :src="img" width="300"/>
    <div class="p-5">
      <p class="text-[#ff484e] mb-1 font-medium">
        {{ datetime }}
      </p>
      <h3 class="title-blog truncates text-xl font-bold text-teal-900 mb-4">
        {{ title }}
      </h3>
      <p class="desc-blog truncates text-[#a7a7a7] mt-2">
        {{ desc }}
      </p>
      <button class="bg-[#ff484e] text-white py-1.5 px-4 rounded mt-4">
        Read More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    datetime: string
    title: string
    desc: string
    img: string
  }>()
</script>

<style lang="scss" scoped>
  .truncates {
    text-overflow: ellipsis;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .title-blog {
    max-height: 55px;
  }
  .desc-blog {
    max-height: 49px;
  }
</style>
