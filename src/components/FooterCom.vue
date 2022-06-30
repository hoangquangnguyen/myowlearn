<template>
  <div class="mydiv flex flex-row items-start justify-between mb-20">
    <div>
      <h3 class="font-semibold text-xl mb-8">Event & Bootcamp</h3>
      <div class="grid grid-cols-2 gap-y-4 gap-x-12">
        <a href="">Web Development</a>
        <a href="">Mobile Development</a>
        <a href="">UI Design</a>
        <a href="">UI Research</a>
        <a href="">Presentation</a>
        <a href="">Comunication</a>
        <a href="">Video Production</a>
        <a href="">Digital Marketing</a>
        <a href="">Branding</a>
      </div>
    </div>
    <div>
      <h3 class="font-semibold text-xl mb-8">About Owlearn</h3>
      <div class="grid grid-cols-1 gap-y-4 gap-x-12">
        <a href="">Adminission Info</a>
        <a href="">Article</a>
        <a href="">Group & Referral Program</a>
        <a href="">Careers</a>
      </div>
    </div>
    <div>
      <h3 class="font-semibold text-xl mb-8">Contact</h3>
      <div class="grid grid-cols-1 gap-y-4 gap-x-12">
        <a href="" class="text-[#086BED]">support@edtech.com</a>
        <a href="" class="text-[#086BED]">(+62) 85923935983</a>
        <p class="max-w-[250px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div class="flex flex-row gap-x-3 items-center">
          <a href=""><img src="@/assets/img/instagram-icon.png" alt="" /></a>
          <a href=""><img src="@/assets/img/twitter-icon.png" alt="" /></a>
          <a href=""><img src="@/assets/img/in-icon.png" alt="" /></a>
          <a href=""><img src="@/assets/img/youtube-icon.png" alt="" /></a>
        </div>
      </div>
    </div>
  </div>

  <div class="h-16 bg-black flex flex-col items-center w-full">
    <span class="text-white my-auto"
      >Copyright © 2021 Owlearn. All Rights Reserved.</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterCom',
})
</script>
