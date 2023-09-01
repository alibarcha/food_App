<template>
  <div>
    <h3 class="text-3xl font-bold uppercase text-red-500 mb-6">Ingredients</h3>
    <input
      type="text"
      v-model="keyword"
      class="border-2 p-2 border-gray-200 rounded w-full mb-8 outline-red-500"
      placeholder="Search for Ingredeints"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      class="block bg-white rounded p-3 mb-8 shadow-lg border py-4 transform scale-100 hover:scale-105 transition-all"
      v-for="ingredient in computedIngredient"
      :key="ingredient.idIngredient"
    >
      <h3 class="text-2xl font-boldmb-2">{{ ingredient.strIngredient }}</h3>
      <p class="text-sm" v-if="ingredient.strDescription">
        {{ filter.truncateWords(ingredient.strDescription, 20) }}...
      </p>
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import filter from "../filters/filter";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
  console.log("ing", ingredients);
});

const keyword = ref("");

const computedIngredient = computed(() => {
  if (!computedIngredient) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
</script>

<style>

</style>