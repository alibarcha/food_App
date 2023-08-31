<template>
  <div>
     <h3 class="text-3xl font-bold uppercase text-red-500 mb-6"><span class="text-gray-700"> Meals</span> by letter</h3>
    <div class="flex justify-center flex-wrap md:my-6 my-2 md:gap-3 gap-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="text-sm font-bold transform scale-100  hover:scale-150  transition-all hover:text-red-500"
        :class="{'text-red-500 scale-150':route.path===`/by-letter/${letter}`}"
      >
        {{ letter }}
      </router-link>
    </div>
    <Meals :meals="searchMelaByLetterData"></Meals>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const route = useRoute();

console.log('rou',route)

// render state searchby letter data
const searchMelaByLetterData = computed(() => {
  return store.state.mealsByLetter;
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

</script>

<style>

</style>