<template>
  <!-- Hearder -->
  <div
    class="mydiv flex items-center justify-between py-[36px] mb-[60px] text-brown2"
  >
    <a href="/" class="flex flex-row items-center">
      <img src="@/assets/logo.png" alt="" class="h-11 w-20" />
      <span class="text-3xl text-[#313273]">Owlearn</span>
    </a>
    <div
      class="text-base font-normal flex items-center justify-between text-center flex-1 ml-[60px]"
    >
      <div class="flex-1 cursor-pointer hover:underline hover:font-bold">
        Home
      </div>
      <div class="flex-1 cursor-pointer hover:underline hover:font-bold">
        Bootcamp
      </div>
      <div class="flex-1 cursor-pointer hover:underline hover:font-bold">
        Events
      </div>
      <div class="flex-1 cursor-pointer hover:underline hover:font-bold">
        Article
      </div>
      <div class="flex-1 cursor-pointer hover:underline hover:font-bold">
        Contact Us
      </div>
    </div>
    <button
      class="ml-[60px] px-10 py-4 border-[1px] rounded-lg font-bold text-base text-pinkD border-pinkD hover:bg-pink-100 transition ease-out duration-300"
    >
      Contact Us
    </button>
  </div>
  <!-- Banner -->
  <div class="mydiv flex flex-row items-center justify-between">
    <div class="flex-1">
      <h1 class="font-extrabold text-7xl mb-[10px]">
        Learn Any Skills to advance your career path
      </h1>
      <div class="mb-[30px]">
        <img src="@/assets/vector-line.png" alt="" />
      </div>
      <p class="font-medium text-xl max-w-[530px] mb-12">
        Want to improve your work skills? You need to study harder with the help
        of a great mentor to improve your performance at work
      </p>
      <div class="flex items-center">
        <button
          class="bg-pinkD text-white px-10 py-5 font-bold rounded-md hover:bg-pink-500 transition ease-out duration-300"
        >
          Explore path
        </button>
        <!-- rating -->
        <div class="ml-10 flex items-center">
          <div class="flex items-center">
            <div
              class="h-10 w-10 border-pinkD bg-green-500 border-2 rounded-full"
            ></div>
            <div
              class="h-10 w-10 border-pinkD bg-green-500 border-2 rounded-full -ml-3"
            ></div>
            <div
              class="h-10 w-10 border-pinkD bg-green-500 border-2 rounded-full -ml-3"
            ></div>
          </div>
          <div class="ml-3">
            <div class="flex">
              <img src="@/assets/star-full.png" alt="" />
              <img src="@/assets/star-full.png" alt="" />
              <img src="@/assets/star-full.png" alt="" />
              <img src="@/assets/star-full.png" alt="" />
              <img src="@/assets/star-half.png" alt="" />
            </div>
            <span>(4,5/5 from 10k Alumni)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1"><img src="@/assets/img-banner.png" alt="" /></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroCom',
})
</script>

<style scoped></style>
