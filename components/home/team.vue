<template>
  <div>
    <section class="bg-gray-100 py-16">
      <div class="px-4 sm:px-0 mx-auto max-w-screen-lg text-center">
        <h2 class="text-3xl font-bold text-teal-900">
          Meet Our Team
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-8">
          <CardTeams
            v-for="(data, index) in team"
            :key="index"
            :img="data.img"
            :name="data.name"
            :position="data.position"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'

  const store = useTeamStore()
  const { team } = storeToRefs(store)
</script>
