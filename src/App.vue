<template>
  <HeroCom />
  <PartnersCom />
  <AboutUsCom />
  <CourseCom />
  <CtaCom />
  <GraduatedCom />
  <TestimonialCom />
  <FooterCom />
  <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

  <!-- <router-view /> -->
</template>
<script lang="ts" setup>
import HeroCom from './components/HeroCom.vue'
import PartnersCom from './components/PartnersCom.vue'
import AboutUsCom from './components/AboutUsCom.vue'
import CourseCom from './components/Course/CourseCom.vue'
import CtaCom from './components/CtaCom.vue'
import GraduatedCom from './components/GraduatedCom.vue'
import TestimonialCom from './components/TestimonialCom.vue'
import FooterCom from './components/FooterCom.vue'
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700;800&display=swap');
</style>
