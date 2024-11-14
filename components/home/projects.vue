<template>
  <div>
    <section class="bg-white py-16">
      <div class="px-4 sm:px-0 mx-auto max-w-screen-lg text-center">
        <h2 class="text-3xl font-bold text-teal-900">
          Some Of Our Logistics Cargo Projects
        </h2>
        <div class="flex justify-center space-x-3 sm:space-x-4 mt-8">
          <button class="bg-[#ff484e] text-white py-2 px-3 sm:px-4 rounded">
            Custome
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 text-teal-900 py-2 px-3 sm:px-4 rounded">
            Transportation
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 text-teal-900 py-2 px-3 sm:px-4 rounded">
            Warehousing
          </button>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-8">
          <CardProjects
            v-for="(data, index) in project"
            :key="index"
            :title="data.title"
            :desc="data.desc"
            :img="data.img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'

  const store = useProjectStore()
  const { project } = storeToRefs(store)
</script>
