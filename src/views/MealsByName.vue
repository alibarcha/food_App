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
      <div
        v-for="meal in searchMealsData"
        :key="meal.idMeal"
        class="shadow-md rounded-xl bg-white"
      >
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img
            :src="meal.strMealThumb"
            :alt="strMeal"
            class="rounded-t-xl h-64 w-full object-cover"
          />
        </router-link>
        <!-- card content -->
        <div class="px-5 py-6">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            deleniti corrupti quasi est vel nemo!
          </p>
          <div class="">
            <a
              :href="meal.strYoutube"
              target="_blank"
              class="px-3 py-2 border border-red-600 rounded bg-red-500 hover:bg-red-400 text-white transition-colors"
              >YouTube</a
            >
            <router-link
              to="/"
              class="px-3 ms-3 py-2 border border-green-600 rounded bg-green-500 hover:bg-green-400 text-white transition-colors"
            >
              View
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <pre>{{ searchMealsData}}</pre> -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";
import { useRoute } from "vue-router";

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