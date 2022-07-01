<template>
  <HeroCom />
  <PartnersCom />
  <AboutUsCom />
  <CourseCom />
  <CtaCom />
  <GraduatedCom />
  <TestimonialCom />
  <FooterCom />
</template>

<script lang="ts">
import HeroCom from '../components/HeroCom.vue'
import PartnersCom from '../components/PartnersCom.vue'
import AboutUsCom from '../components/AboutUsCom.vue'
import CourseCom from '../components/Course/CourseCom.vue'
import CtaCom from '../components/CtaCom.vue'
import GraduatedCom from '../components/GraduatedCom.vue'
import TestimonialCom from '../components/TestimonialCom.vue'
import FooterCom from '../components/FooterCom.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HeroCom,
    PartnersCom,
    AboutUsCom,
    CourseCom,
    CtaCom,
    GraduatedCom,
    TestimonialCom,
    FooterCom,
  },
})
</script>
