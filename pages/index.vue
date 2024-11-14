<template>
  <div>
    <Home />
  </div>
</template>

<script setup lang="ts">
  import { definePageMeta } from '#imports'
  definePageMeta({
    middleware: ['auth']
  })

  const store = useBlogStore()
  const testimonialStore = useTestimonialStore()
  const teamStore = useTeamStore()
  const projectStore = useProjectStore()
  onMounted(async () => {
    store.getBlog()
    testimonialStore.getTestimonial()
    teamStore.getTeam()
    projectStore.getProject()
  })
</script>
