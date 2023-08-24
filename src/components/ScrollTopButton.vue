<template>
  <button
    v-if="showButton"
    @click="scrollTop"
    class="bg-red-600 hover:bg-red-500 border-2 border-red-600 w-14 h-14 rounded-full flex justify-center shadow-xl fixed bottom-4 right-4 z-10 items-center transition-all duration-900 ease-in-out"
  >
    <i class="fas fa-arrow-up text-white font-bold text-lg"></i>
  </button>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const showButton = ref(true);

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 130;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>

</style>