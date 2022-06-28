<template>
  <div class="py-10 mb-16">
    <div class="flex items-center justify-between mb-12">
      <h2 class="font-bold text-4xl">Discover Course & Bootcamp</h2>
      <button
        class="border-pinkD border-2 rounded-md py-4 px-10 font-bold text-pinkD hover:bg-pink-100 transition ease-out duration-300"
      >
        Show All
      </button>
    </div>
    <!-- nav -->
    <div class="flex flex-row gap-x-3">
      <button class="py-3 px-7">All program</button>
      <button>UI/UX Design</button>
      <button>Product Management</button>
    </div>
    <hr class="py-6" />
    <div class="grid grid-cols-3 gap-7 px-10">
      <div class="w-[368px] h-[480px] bg-green-400"></div>
      <div class="w-[368px] h-[480px] bg-green-400"></div>
      <div class="w-[368px] h-[480px] bg-green-400"></div>
      <div class="w-[368px] h-[480px] bg-green-400"></div>
      <div class="w-[368px] h-[480px] bg-green-400"></div>
      <div class="w-[368px] h-[480px] bg-green-400"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CourseCom',
})
</script>
