<template>
  <div>
    Meals by ingredients

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

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<style>

</style>