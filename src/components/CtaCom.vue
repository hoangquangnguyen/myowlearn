<template>
  <div class="relative">
    <div
      class="relative bg-pinkD -mx-[100px] flex flex-row items-center justify-between py-[30px] h-[360px] z-10"
    >
      <div class="ml-[200px] w-1/2 z-0">
        <h2 class="text-white max-w-[570px] text-4xl font-bold mb-9">
          Still confused about your career choice? consult with our experts
        </h2>
        <button class="bg-white text-pinkD font-bold px-10 py-5 rounded-md">
          Contact Us
        </button>
      </div>

      <div class="relative w-1/2 h-[360px] z-10">
        <div
          class="absolute top-0 left-0 bg-gradient-to-b from-[#D2388F] to-[#a23573] w-[70%] h-0 pt-[70%] rounded-full"
        >
          <img
            src="@/assets/student-girl-using-laptop-learnin.png"
            alt=""
            class="absolute top-2 left-3"
          />
        </div>
      </div>
    </div>
    <div class="relative h-[100px] -mx-[100px] bg-white z-20"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CtaCom',
})
</script>
