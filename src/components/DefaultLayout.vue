<template>
     <Navbar></Navbar>
  <main class="container  mx-auto px-6 pt-28 pb-10 ">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style>

</style>