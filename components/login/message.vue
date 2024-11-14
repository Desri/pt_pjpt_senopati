<template>
  <div>
    <div v-if="userStore.isIncorectAccount" class="bg-[#f3f3f3] p-3 mb-3 rounded border border-solid border-primary-grey">
      <h3 class="text-black text-[15px] font-medium">
        Error
      </h3>
      <p class="text-black text-[14px]">
        Your Account Not Found
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const userStore = useLoginStore();
</script>
