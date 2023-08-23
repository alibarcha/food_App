<template>
  <div class="flex justify-center flex-col p-8">
      Home Page
   

  </div>
</template>

<script setup>
import {ref, computed, onMounted } from "vue";
import store from "../store";
import axiosClient from '../axiosClient.js'



// ingredents
const ingredents=ref([])

onMounted(async()=>{
   const response= await axiosClient.get('/list.php?i=list')
   console.log(response.data)
   ingredents.value=response.data
})


</script>

<style>

</style>