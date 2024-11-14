<template>
  <div class="mx-auto max-w-screen-lg absolute left-0 right-0 top-1 z-50 z-50">
    <header class="bg-[#7a7a7a] bg-opacity-75 rounded-[38px]">
      <div class="mx-auto px-4 py-2.5 flex justify-between items-center">
        <div class="text-white text-2xl font-bold flex items-center">
          <img src="/logo.png" class="h-12 mx-auto" alt="Logo" />
        </div>
        <nav class="hidden sm:block text-white">
          <ul class="flex space-x-4 sm:space-x-6">
            <li><NuxtLink to="/#" class="hover:text-[#ff484e]">Home</NuxtLink></li>
            <li><NuxtLink to="/#" class="hover:text-[#ff484e]">About</NuxtLink></li>
            <li><NuxtLink to="/#" class="hover:text-[#ff484e]">Service</NuxtLink></li>
            <li><NuxtLink to="/#" class="hover:text-[#ff484e]">Project</NuxtLink></li>
            <li><NuxtLink to="/#" class="hover:text-[#ff484e]">News</NuxtLink></li>
            <li><NuxtLink to="/#" class="hover:text-[#ff484e]">Contact Us</NuxtLink></li>
          </ul>
        </nav>
        <div class="menu-employee">
          <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
            <div class="flex items-center gap-3">
              <UAvatar src="/profile-user.jpg" class="photo-profile" />
              <span class="text-white">
                Employee
              </span>
            </div>
            <template #item="{ item }">
              <div class="text-left px-5" @click="logout">
                Logout
              </div>
            </template>
          </UDropdown>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const store = useLoginStore()
  const router = useRouter()
  const items = [
    [{
      label: 'Logout'
    }]
  ]
  const logout = () => {
    store.logout()
    router.push({ path: "/auth/login" })
  };
</script>

<style lang="scss">
  .menu-employee {
    .group {
      width: 120px;
    }
  }
  .photo-profile {
    img {
      width: 32px;
    }
  }
</style>
