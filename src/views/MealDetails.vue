<template>
  <div class="max-w-[800px] mx-auto px-14 overflow-hidden">
    <h3 class="text-3xl font-bold uppercase text-red-500 mb-5">Meal Details</h3>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="h-96 w-full object-cover transform scale-100 hover:scale-105 transition-all cursor-pointer rounded"
    />
    <h1 class="text-3xl font-bold my-5">{{ meal.strMeal }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg py-2">
      <div>
        <span class="font-bold pr-2">Category: </span>{{ meal.strCategory }}
      </div>
      <div><span class="font-bold pr-2">Area: </span> {{ meal.strArea }}</div>
      <div><span class="font-bold pr-2">Tags: </span> {{ meal.strTags }}</div>
    </div>

    <!-- Instructions -->
    <p class="my-3 text-sm">
      {{ meal.strInstructions }}
    </p>

    <!-- ingredients and Measures -->
    <div class="grid grid-cols-1 md:grid-cols-3">
      <!-- ingredients -->
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <!-- Measures -->
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(e, ind) of new Array(20)" :key="ind">
            <li
              v-if="
                meal[`strMeasure${ind + 1}`] &&
                meal[`strMeasure${ind + 1}`].length > 2
              "
            >
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <!-- actions buttons -->
    <div class="my-5">
      <a
        :href="meal.strYoutube"
        target="_blank"
        class="px-3 py-2 border border-red-600 rounded bg-red-500 hover:bg-red-400 text-white transition-colors"
        >YouTube</a
      >
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 ms-5 py-2 border border-green-600 rounded bg-green-500 hover:bg-green-400 text-white transition-colors"
      >
        View Original Source
      </a>
    </div>
  </div>
  <!-- <pre> {{ meal }}</pre> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    // console.log('detail',data)
    meal.value = data.meals[0] || {};
  });
});
</script>

<style>

</style>