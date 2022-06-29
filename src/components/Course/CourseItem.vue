<template>
  <div class="w-[368px] h-[480px] border-[1px] border-gray-300 rounded-md">
    <div class="relative h-[40%] mb-5">
      <img :src="imgurl" alt="" />
      <div
        class="absolute bottom-[20px] left-[20px] flex items-center px-[15px] py-[6px] bg-white rounded-full"
      >
        <img src="@/assets/user.png" alt="" />
        <p class="text-pinkD font-semibold">{{ amount }}</p>
      </div>
    </div>
    <div class="h-[60%] p-5">
      <span>{{ datetime }}</span>
      <p class="font-extrabold text-2xl">{{ title }}</p>
      <p>{{ sumary }}</p>
      <div class="flex flex-row items-center justify-between mt-5">
        <div class="flex flex-row items-center gap-x-3">
          <p class="font-bold text-lg text-pinkD">
            $ {{ discount == 0 ? price : discount }}
          </p>
          <p v-if="discount > 0" class="line-through decoration-gray-400">
            $ {{ price }}
          </p>
        </div>
        <button
          class="px-8 py-2 border-[1px] rounded-lg font-bold text-base text-pinkD border-pinkD hover:bg-pink-100 transition ease-out duration-300"
        >
          Show all
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    imgurl: String,
    datetime: String,
    amount: Number,
    title: String,
    sumary: String,
    price: Number,
    discount: Number,
  },
}
</script>
