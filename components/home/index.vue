<template>
  <div>
    <main class="bg-banner bg-cover bg-no-repeat">
      <div class="mx-auto max-w-screen-lg">
        <div class="px-4 sm:px-0 pt-32 pb-20 sm:flex justify-between items-center">
          <div class="text-white max-w-lg mb-4 sm:mb-0">
            <h2 class="text-red-500 text-lg">YOU ARE WELCOME TO</h2>
            <h1 class="text-4xl sm:text-5xl font-bold">Domestic Freight Forwarder</h1>
            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <div class="mt-6 flex space-x-4">
              <a href="#" class="bg-[#ff484e] text-white px-6 py-2 rounded hover:bg-red-700">About Us</a>
              <a href="#" class="bg-[#ff484e] text-white px-6 py-2 rounded hover:bg-red-700">Service</a>
            </div>
          </div>
          <div class="bg-gray-800 bg-opacity-75 p-8 rounded-lg text-white max-w-md w-full">
            <form>
              <div class="mb-4">
                <label for="freight-type" class="block mb-2">FREIGHT TYPE:</label>
                <select id="freight-type" class="w-full p-2 rounded bg-gray-700 text-white">
                  <option>Select</option>
                </select>
              </div>
              <div class="mb-4">
                <label for="load" class="block mb-2">LOAD:</label>
                <select id="load" class="w-full p-2 rounded bg-gray-700 text-white">
                  <option>Select</option>
                </select>
              </div>
              <div class="mb-4">
                <label for="distance" class="block mb-2">DIST (MILES):</label>
                <input type="range" id="distance" class="w-full" min="0" max="1761">
                <div class="flex justify-between text-sm mt-2">
                  <span>0</span>
                  <span>1761</span>
                </div>
              </div>
              <div class="mb-4 flex space-x-4">
                <div class="w-1/2">
                  <label for="name" class="block mb-2">YOUR NAME:</label>
                  <input type="text" id="name" class="w-full p-2 rounded bg-gray-700 text-white" placeholder="Jhon Doe..">
                </div>
                <div class="w-1/2">
                  <label for="email" class="block mb-2">YOUR MAIL:</label>
                  <input type="email" id="email" class="w-full p-2 rounded bg-gray-700 text-white" placeholder="Example@mail.com">
                </div>
              </div>
              <button type="submit" class="w-full bg-[#ff484e] text-white px-4 py-2 rounded">SUBMIT REQUEST</button>
            </form>
          </div>
        </div>
      </div>
    </main>
    <HomeAbout />
    <HomeServices />
    <HomeVideo />
    <HomeStatistik />
    <HomeTeam />
    <HomeProjects />
    <HomeTestimonials />
    <HomeBlog />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .bg-banner {
    background-image: linear-gradient(rgba(0, 96, 118, 0.8), rgba(0, 96, 118, 0.8)), url('/banner-bg.jpg');
  }
</style>
