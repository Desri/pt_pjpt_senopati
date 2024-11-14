<template>
  <div>
    <footer class="bg-[#213442] text-white py-8">
      <div class="px-4 sm:px-0 mx-auto max-w-screen-lg py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- About Section -->
          <div>
            <h2 class="text-xl font-bold mb-4">
              About
            </h2>
            <p class="mb-4">
              PT. Senopati started in 1962, as a domestic freight forwarder. As a certified ISO 9001, since 2003, we have grown and developed to be one of the leading providers for End-to-End Supply Chain logistics.
            </p>
            <button class="bg-transparent border border-[#ff484e] text-[#ff484e] py-2 px-4 rounded hover:bg-red-500 hover:text-white">
              Get a Quote
            </button>
          </div>
          <!-- Links Section -->
          <div>
            <h2 class="text-xl font-bold mb-4">
              Links
            </h2>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/#" class="hover:text-[#ff484e]">
                  <i class="fas fa-chevron-right mr-2"></i>
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#" class="hover:text-[#ff484e]">
                  <i class="fas fa-chevron-right mr-2"></i>
                  About Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#" class="hover:text-[#ff484e]">
                  <i class="fas fa-chevron-right mr-2"></i>
                  Services
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#" class="hover:text-[#ff484e]">
                  <i class="fas fa-chevron-right mr-2"></i>
                  Career
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#" class="hover:text-[#ff484e]">
                  <i class="fas fa-chevron-right mr-2"></i>
                  Contact Us
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- Image Gallery Section -->
          <div>
            <h2 class="text-xl font-bold mb-4">
              Image Gallery
            </h2>
            <div class="grid grid-cols-2 gap-2">
              <img alt="Image of a person working on a computer" class="w-full h-auto rounded" height="100" src="https://storage.googleapis.com/a1aa/image/fRngzLRxF12ubyfzUFWobEU3xPmrW89S6z0Dr1febIWmCYCPB.jpg" width="100"/>
              <img alt="Image of a hand holding a plant" class="w-full h-auto rounded" height="100" src="https://storage.googleapis.com/a1aa/image/oo7luTs76hLUHBEesffECuDjUddfD9uB1eDIhd2F4CGCFwEeE.jpg" width="100"/>
              <img alt="Image of a person writing on a notebook" class="w-full h-auto rounded" height="100" src="https://storage.googleapis.com/a1aa/image/9vmXpUf2KCzSFyvm3h3xdllJJmpaA9vXZwQjJoHObu9VAT4JA.jpg" width="100"/>
              <img alt="Image of people working together" class="w-full h-auto rounded" height="100" src="https://storage.googleapis.com/a1aa/image/76HUZ65WYyqZKlHAMIUxZ3IAjeLMHz3Y4Ir7wbl2qAHWAT4JA.jpg" width="100"/>
            </div>
          </div>
          <!-- Contact Info Section -->
          <div>
            <h2 class="text-xl font-bold mb-4">
              Contact Info
            </h2>
            <ul class="space-y-2">
              <li>
                <i class="fas fa-phone-alt text-red-500 mr-2"></i>
                +62 21 885 38 35
              </li>
              <li>
                <i class="fas fa-envelope text-red-500 mr-2"></i>
                sales@ptsenopati.com
              </li>
              <li>
                <i class="fas fa-map-marker-alt text-red-500 mr-2"></i>
                JL. H. Wahab Affan RT.002 RW.001, Kelurahan Medan Satria, Kecamatan Medan Satria, RT.002/RW.001, Medan Satria, Kecamatan Medan Satria, Kota Bekasi, Jawa Barat 17132
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
