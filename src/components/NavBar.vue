<template>
  <nav
    class="mydiv flex items-center justify-between py-[36px] mb-[60px] text-brown2"
  >
    <a href="/" class="flex flex-row items-center">
      <img src="@/assets/img/logo.png" alt="" class="h-11 w-20" />
      <span class="text-3xl text-[#313273]">Owlearn</span>
    </a>
    <div
      class="text-base font-normal flex items-center justify-between text-center flex-1 ml-[60px]"
    >
      <router-link
        to="/"
        class="flex-1 cursor-pointer hover:underline hover:font-bold"
      >
        Home
      </router-link>
      <router-link
        to="/about"
        class="flex-1 cursor-pointer hover:underline hover:font-bold"
      >
        Bootcamp
      </router-link>
      <div class="flex-1 cursor-pointer hover:underline hover:font-bold">
        Events
      </div>
      <div class="flex-1 cursor-pointer hover:underline hover:font-bold">
        Article
      </div>
      <router-link
        to="/admin"
        class="flex-1 cursor-pointer hover:underline hover:font-bold"
      >
        Admin page
      </router-link>
    </div>
    <router-link to="/about">
      <button
        class="ml-[60px] px-10 py-4 border-[1px] rounded-lg font-bold text-base text-pinkD border-pinkD hover:bg-pink-100 transition ease-out duration-300"
      >
        Contact Us
      </button>
    </router-link>
  </nav>
</template>
<script lang="ts">
export default {}
</script>
