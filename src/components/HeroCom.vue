<template>
  <div class="flex items-center justify-between px-[100px] py-[36px]">
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
      class="ml-[60px] px-10 py-4 border-[1px] rounded-lg font-bold text-base text-[#DC4298] border-[#DC4298]"
    >
      Contact Us
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroCom',
})
</script>

<style scoped></style>
