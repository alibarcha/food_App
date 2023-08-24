<template>
  <div class="shadow-md rounded-xl bg-white">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-64 w-full object-cover"
      />
    </router-link>
    <!-- card content -->
    <div class="px-5 py-6">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-5">
      {{ filter.truncateWords(meal.strInstructions, 25) }}...
      </p>
      <div class="">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="px-3 py-2 border border-red-600 rounded bg-red-500 hover:bg-red-400 text-white transition-colors"
          >YouTube</a
        >
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 ms-3 py-2 border border-green-600 rounded bg-green-500 hover:bg-green-400 text-white transition-colors"
        >
          View Detail
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import filter from "../filters/filter.js";
const { meal } = defineProps({
  meal: {
    type: Object,
    default: () => {},
  },
});
</script>

<style>

</style>