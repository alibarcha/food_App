<template>
     <Navbar v-if="showHeader"></Navbar>
     <!-- px-6 pt-28 pb-10 -->
  <main class="container  mx-auto mt-28 mb-20 px-5 ">
    <router-view></router-view>
  </main>
  <Footer v-if="showFooter"></Footer>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const route=useRoute();

const showHeader=computed(()=>{
  return route.name !== 'notFound'
})

const showFooter=computed(()=>{
  return route.name !== 'notFound'
})


</script>

<style>

</style>