<template>
  <div>
    <section class="bg-gray-100 py-16">
      <div class="px-4 sm:px-0 mx-auto max-w-screen-lg text-center">
        <h2 class="text-3xl font-bold text-teal-900">
          What Our Clients Say
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-8">
          <CardTestimonials
            v-for="(data, index) in testimonial"
            :key="index"
            :img="data.img"
            :desc="data.desc"
            :name="data.name"
            :class="index === 2 ? 'hidden sm:block' : ''"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'

  const store = useTestimonialStore()
  const { testimonial } = storeToRefs(store)
</script>
