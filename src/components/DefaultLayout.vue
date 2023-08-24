<template>
  <Navbar></Navbar>
  <main class="container border mx-auto">
    <router-view></router-view>
    
  </main>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>

<style>

</style>