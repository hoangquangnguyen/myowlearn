<template>
  <!-- Banner -->
  <div class="mydiv flex flex-row items-center justify-between">
    <div class="flex-1">
      <h1 class="font-extrabold text-7xl mb-[10px]">
        Learn Any Skills to advance your career path
      </h1>
      <div class="mb-[30px]">
        <img src="@/assets/img/vector-line.png" alt="" />
      </div>
      <p class="font-medium text-xl max-w-[530px] mb-12">
        Want to improve your work skills? You need to study harder with the help
        of a great mentor to improve your performance at work
      </p>
      <p>Test stores:{{ storedata }}</p>
      <div class="flex items-center">
        <button
          @click="clickExplore"
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
              <img src="@/assets/img/star-full.png" alt="" />
              <img src="@/assets/img/star-full.png" alt="" />
              <img src="@/assets/img/star-full.png" alt="" />
              <img src="@/assets/img/star-full.png" alt="" />
              <img src="@/assets/img/star-half.png" alt="" />
            </div>
            <span>(4,5/5 from 10k Alumni)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1"><img src="@/assets/img/img-banner.png" alt="" /></div>
  </div>
</template>
<script lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const mystore = useStore()
    const storedata = computed<number>(() => {
      return mystore.state.count
    })
    const clickExplore = () => {
      mystore.dispatch('increment', 0)
    }
    return { storedata, clickExplore }
  },
}
</script>

<style scoped></style>
