<template>
  <footer
    class="flex flex-col items-center bg-gray-100 text-center text-white dark:bg-neutral-600 dark:text-neutral-200"
  >
    <div class="container px-6 py-4">
      <div class="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-9">
        <div class="mb-3 sm:mb-0">
          <img
            src="https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg"
            class="lg:h-24 h-36 object-cover w-full rounded-md shadow-lg"
          />
        </div>
        <div class="mb-3 sm:mb-0">
          <img
            src="https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg"
            class="lg:h-24 h-36 w-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div class="mb-3 sm:mb-0">
          <img
            src="https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg"
            class="lg:h-24 h-36 w-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div class="mb-3 sm:mb-0">
          <img
            src="https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg"
            class="lg:h-24 h-36 w-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div class="mb-3 sm:mb-0">
          <img
            src="https://www.themealdb.com/images/media/meals/jcr46d1614763831.jpg"
            class="lg:h-24 h-36 w-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div class="mb-3 sm:mb-0">
          <img
            src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
            class="lg:h-24 h-36 w-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div class="mb-3 sm:mb-0">
          <img
            src="https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg"
            class="lg:h-24 h-36 w-full object-cover rounded-md shadow-lg"
          />
        </div>
          <div class="mb-3 sm:mb-0">
          <img
            src="https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg"
            class="lg:h-24 h-36 w-full object-cover rounded-md shadow-lg"
          />
        </div>
          <div class="mb-3 sm:mb-0">
          <img
            src="https://www.themealdb.com/images/media/meals/vwuprt1511813703.jpg"
            class="lg:h-24 h-32 w-full object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>

    <!--Copyright section-->
    <div
      class="w-full  p-2 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
    >
      © 2023 Copyright:
      <a class="dark:text-neutral-400" href="#"
        >All
        <span class="text-red-500" @click="goHomePage">Food Recipes </span> of
        the world!
      </a>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goHomePage = () => {
  router.push("/");
};
</script>

<style>

</style>