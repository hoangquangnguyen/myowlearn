<template>
  <div
    class="mydiv flex flex-row flex-1 items-center justify-between mb-[200px]"
  >
    <div class="rounded-md h-[420px]">
      <img src="@/assets/testimonial-img.png" alt="" />
    </div>
    <div class="flex flex-col flex-1 items-start">
      <h3 class="font-bold text-4xl mb-10">What did they say</h3>
      <p class="text-xl font-normal">
        Higher education in the era of the industrial revolution 4.0 requires
        breakthrough learning using digital platforms that answer the challenges
        of millennial students to study anywhere, anytime and with leading-edge
        ICT technology. From student recruitment to teaching and learning
        administration processes,
      </p>
      <hr class="my-10 bg-black w-full" />
      <div class="w-full flex flex-row items-center justify-between">
        <div class="flex flex-col items-center">
          <span class="font-semibold text-2xl">Briana Patton</span>
          <span>Designer at Salesforce</span>
        </div>

        <button class="rounded-full p-1">
          <img src="@/assets/arrow-right-circle.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestimonialCom',
})
</script>
