<template>
  <div class="bg-green-400 flex flex-col gap-2 p-5">
    Title
    <input type="text" />
    date start
    <input type="date" />
    Date end
    <input type="date" />
    amount
    <input type="number" />
    price
    <input type="number" />
    discount
    <input type="number" />
    imgage
    <input type="file" />
    summary
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const abc = ref('abc')
    return { abc }
  },
}
</script>
