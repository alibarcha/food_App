<template>
  <div>
     <h3 class="text-3xl font-bold uppercase text-red-500 mb-4"> Meals by ingredients</h3>
    <Meals :meals="meals"></Meals>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";

const route = useRoute();

const meals = computed(() => {
  return store.state.mealsByIngredients;
});

console.log('ingr',meals)

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<style>

</style>