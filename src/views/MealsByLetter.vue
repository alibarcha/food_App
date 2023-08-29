<template>
  <div>
     <h3 class="text-3xl font-bold uppercase text-red-500 mb-4">Meals by letter</h3>
    <div class="flex justify-center my-6 gap-3">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="text-sm font-bold transform scale-100  hover:scale-150  transition-all hover:text-red-500"
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
// import MealItem from "../components/MealItem.vue";
import Meals from '../components/Meals.vue'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// const letter=ref()
const route = useRoute();

// render state searchby letter data

const searchMelaByLetterData = computed(() => {
  return store.state.mealsByLetter;
});

// search meals function

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style>

</style>