<template>
  <div>
    Seaarch by letter
    <div class="flex justify-center mt-2 gap-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>

  
     
    <div
      class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-8 my-10"
    >
      <!-- meal item card component -->
      <MealItem
        v-for="meal in searchMelaByLetterData"
        :key="meal.idMeal"
        :meal="meal"
      >
      </MealItem>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "./MealItem.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// const letter=ref()
const route = useRoute();

// render state searchby letter data

const searchMelaByLetterData = computed(() => {
  return store.state.mealsByLetter;
});



// search meals function

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

watch(route,()=>{
   store.dispatch("searchMealsByLetter", route.params.letter);
})
</script>

<style>

</style>