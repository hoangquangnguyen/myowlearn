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
      <CourseItem
        imgurl="course1.png"
        amount="120"
        datetime="4/12/2022"
        price="400"
        discount="0"
        title="Product Management Basic - Course"
        sumary="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
      />
      <CourseItem
        imgurl="course6.png"
        amount="113"
        datetime="4/11/2022"
        price="400"
        discount="200"
        title="Product Management Basic - Course"
        sumary="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
      />
      <CourseItem
        imgurl="course2.png"
        amount="113"
        datetime="4/12/2033"
        price="400"
        discount="300"
        title="Product Management Basic - Course"
        sumary="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
      />
      <CourseItem
        imgurl="course3.png"
        amount="113"
        datetime="4/12/2023"
        price="400"
        discount="0"
        title="Product Management Basic - Course"
        sumary="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
      />
      <CourseItem
        imgurl="course4.png"
        amount="113"
        datetime="4/12/2023"
        price="400"
        discount="200"
        title="Product Management Basic - Course"
        sumary="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
      />
      <CourseItem
        imgurl="course5.png"
        amount="113"
        datetime="4/12/2033"
        price="400"
        discount="0"
        title="Product Management Basic - Course"
        sumary="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
      />
    </div>
  </div>
</template>
<script lang="ts">
import { useFetch } from '@/data/CourseApi'
import { ref } from 'vue'
import CourseItem from './CourseItem.vue'

export default {
  setup() {
    const Varabc = ref('')
    const data = useFetch()
    console.log(data)
    return { Varabc }
  },
  components: { CourseItem },
}
</script>
