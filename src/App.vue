<template>
  <HeroCom />
  <PartnersCom />
  <AboutUsCom />
  <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeroCom from './components/HeroCom.vue'
import PartnersCom from './components/PartnersCom.vue'
import AboutUsCom from './components/AboutUsCom.vue'

export default defineComponent({
  components: {
    HeroCom,
    PartnersCom,
    AboutUsCom,
  },
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700;800&display=swap');
</style>
