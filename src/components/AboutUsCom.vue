<template>
  <div class="mydiv flex py-20 items-center">
    <div
      class="rounded-xl relative bg-gradient-to-b from-white to-gray-500 w-2/5"
    >
      <img src="@/assets/img/online-course-of-study.png" alt="" class="z-0" />
      <div
        class="absolute bottom-0 left-0 z-10 transform translate-x-8 -translate-y-1/2"
      >
        <span class="font-extrabold text-2xl text-white"
          >Educational technology</span
        >
        <span class="flex items-center"
          ><img src="@/assets/img/map-pin.png" alt="" class="h-4 w-4" />
          <p class="ml-3 text-white">Jakarta, Indonesia</p></span
        >
      </div>
    </div>
    <div class="w-3/5 ml-20">
      <h2 class="font-bold text-5xl mb-8">
        Owlearn helps you Become Experienced
      </h2>
      <p class="max-w-[590px] mb-8 text-xl font-medium">
        Owlearn provides e-learning solutions for companies, universities and
        individual professionals. It allows users to create courses, and
        provides an integrated learning management system. Its offerings include
        digital course tools, study materials, IT infrastructure and other
        operations.
      </p>
      <p>Test stores:{{ count }}</p>
      <button
        class="text-white font-semibold bg-pinkD rounded-md py-5 px-8 hover:bg-pink-500 transition ease-out duration-300"
      >
        Become a Member
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const count = computed(() => {
      return store.state.count
    })
    return { count }
  },
}
</script>
