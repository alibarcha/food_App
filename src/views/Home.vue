<template>
  <div class="flex justify-center flex-col p-8">
    <div>
      <input
        type="text"
        name=""
        id=""
        class="border-2 p-2 border-gray-200 rounded w-full"
        placeholder="Search for Meals"
      />
    </div>

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
      <!-- <pre>{{ingredents}}</pre> -->
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