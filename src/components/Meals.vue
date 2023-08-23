<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"> </MealItem>
  </div>

  <div v-if="!meals.length">there are No meals...</div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";

const { meals } = defineProps({
    meals:{
        type:Array,
        required:true,
        default:()=>[]
    }
});
</script>

<style>

</style>