<template>
  <div class="p-8 pb-1">
    <input
      type="text"
      name=""
      v-model="keyword"
      id=""
      class="border-2 p-2 border-gray-200 rounded w-full"
      placeholder="Search for Meals"
      @change="searchMeal"
    />
    <!-- search melas cards -->
    <div
      class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-8 my-10"
    >
    <!-- meal item card component -->
    <MealItem  v-for="meal in searchMealsData" :key="meal.idMeal" :meal="meal">
    </MealItem>
      
    </div>
    <!-- <pre>{{ searchMealsData}}</pre> -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "./MealItem.vue";

const route = useRoute();

const keyword = ref("");
// render state data
const searchMealsData = computed(() => {
  return store.state.searchMealsData;
});

// search meals function
const searchMeal = () => {
  store.dispatch("searchMeals", keyword.value);
};

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeal();
  }
});
</script>

<style>

</style>