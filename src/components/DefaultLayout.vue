<template>
     <Navbar></Navbar>
  <main class="container border mx-auto px-6 pt-28 ">
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>

<style>

</style>