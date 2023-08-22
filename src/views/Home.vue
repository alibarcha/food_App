<template>
  <div class="flex justify-center flex-col p-8">
   
    <div class="flex justify-center mt-2 gap-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>

    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted } from "vue";
import store from "../store";
import axiosClient from '../axiosClient.js'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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