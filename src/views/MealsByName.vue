<template>
  <div class="p-8 pb-1">
     <h3 class="text-3xl font-bold uppercase text-red-500 mb-4">Meals by Name</h3>
    <input
      type="text"
      v-model="keyword"
      placeholder="Search for Meals"
      @change="searchMeal"
      class="border-2 p-2 border-gray-200  rounded w-full outline-red-500 "
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
import MealItem from '../components/MealItem.vue'

const route = useRoute();

const keyword = ref("");
// render state data
const searchMealsData = computed(() => {
  return store.state.searchMealsData;
});

// search meals function
const searchMeal = () => {
  if(keyword.value){
    store.dispatch("searchMeals", keyword.value);
  }
  else{
    store.commit("setSearchMeals",[])
  }
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