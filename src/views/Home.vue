<template>
  <div class="flex justify-center flex-col">
    <h3 class="text-3xl font-bold uppercase text-red-500 mb-6">Random  <span class="text-gray-700"> Meals</span></h3>
    <Meals :meals="[...ingredents]"></Meals>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";
import Meals from "../components/Meals.vue";

// ingredents
const ingredents = ref([]);


console.log("home", ingredents.value);

// fetch 10 render meals
onMounted(async () => {
  for (let i = 0; i <12; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => ingredents.value.push(data.meals[0]));
  }
});
</script>

<style>

</style>