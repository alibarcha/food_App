<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input
      type="text"
      name=""
      v-model="keyword"
      id=""
      class="border-2 p-2 border-gray-200 rounded w-full mb-4"
      placeholder="Search for Ingredeints"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      class="block bg-white rounded p-3 mb-3 shadow"
      v-for="ingredient in computedIngredient"
      :key="ingredient.idIngredient"
    >
      <h3 class="text-2xl font-boldmb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
  <!-- <pre>{{ ingredients }}</pre> -->
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
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