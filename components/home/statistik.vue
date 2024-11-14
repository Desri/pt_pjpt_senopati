<template>
  <div>
    <section class="bg-white pb-16 pt-20">
      <div class="mx-auto max-w-screen-lg text-center">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          <div class="shadow p-5 mb-9 sm:mb-0">
            <img src="/truck.webp" class="h-16 mb-5 mt-[-52px] mx-auto rounded-[40px] border-4 border-solid border-[#cacaca]" alt="Truck" />
            <h3 class="text-3xl sm:text-4xl font-bold text-teal-900">
              60.000+
            </h3>
            <p class="text-gray-700 mt-2 font-bold leading-5">
              Teus handling annually
            </p>
          </div>
          <div class="shadow p-5 mb-9 sm:mb-0">
            <img src="/team.svg" class="h-16 bg-[#d5dadb] mb-5 mt-[-52px] mx-auto rounded-[40px] border-4 border-solid border-[#cacaca]" alt="Team" />
            <h3 class="text-3xl sm:text-4xl font-bold text-teal-900">
              500+
            </h3>
            <p class="text-gray-700 mt-2 font-bold leading-5">
              Professional team members at your service
            </p>
          </div>
          <div class="shadow p-5 mb-9 sm:mb-0">
            <img src="/globe.svg" class="h-16 bg-[#d5dadb] mb-5 mt-[-52px] mx-auto rounded-[40px] border-4 border-solid border-[#cacaca]" alt="Global" />
            <h3 class="text-3xl sm:text-4xl font-bold text-teal-900">
              200.000+
            </h3>
            <p class="text-gray-700 mt-2 font-bold leading-5">
              Square meters of total warehouses and counting
            </p>
          </div>
          <div class="shadow p-5 mb-9 sm:mb-0">
            <Lands className="h-16 mx-auto bg-[#d5dadb] mb-5 mt-[-52px] mx-auto rounded-[40px] border-4 border-solid border-[#cacaca]" />
            <h3 class="text-3xl sm:text-4xl font-bold text-teal-900">
              150+
            </h3>
            <p class="text-gray-700 mt-2 font-bold leading-5">
              Hectares total asset of lands
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { Lands } from '@/icons'
</script>

<style lang="scss" scoped>
  .shadow {
    box-shadow: 13.435px 13.435px 30px 0px rgba(55, 54, 54, 0.12);
    h3 {
      padding-bottom: 5px;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #000d51;
    }
  }
</style>
