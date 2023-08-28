<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md fixed right-0 left-0">
    <div
      class="max-w-screen-xl  flex lg:flex-nowrap flex-wrap items-center justify-between mx-auto p-2"
    >
      <router-link
        :to="{ name: 'home' }"
        class="flex items-center text-2xl font-bold text-red-500"
      >
        <img src="../assets/food.png" class="h-8 mr-1" alt="Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Recipes</span
        >
      </router-link>
      <div class="flex items-center lg:order-3 relative">
        <button
          @click="openUserProfile"
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-10 h-10 rounded-full"
            src="https://randomuser.me/api/portraits/men/78.jpg"
            alt="user photo"
          />
        </button>
        <!-- Dropdown menu -->
        <div
          v-if="profile"
          class="z-50 absolute right-0 top-8 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdow"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white"
              >alibarcha</span
            >
            <span
              class="block text-sm text-gray-500 truncate dark:text-gray-400"
              >alibarcha910@gmail.com</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <button
          @click="toggleDropdown"
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-user"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        v-if="dropdownMenu"
        class="items-center md:relative absolute md:justify-center md:left-auto left-0 md:right-auto right-0 md:top-auto top-14 z-40 md:shadow-none shadow-xl justify-between md:w-full w-11/12 mx-auto md:flex md:order-1 md:my-5 my-auto"
        id="navbar-user"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 border-gray-100 bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li class="md:mb-0 mb-2">
            <router-link
              :to="{ name: 'home' }"
              class="block py-2 pl-3 pr-4 md:text-gray-900 text-white bg-red-500 rounded md:bg-transparent md:hover:text-red-500 md:p-0 md:hover:bg-transparent hover:bg-blue-400 md:dark:text-blue-500"
              >Home
            </router-link>
          </li>
          <li class="md:mb-0 mb-2">
            <router-link
              :to="{ name: 'byName' }"
              class="block py-2 pl-3 pr-4 md:text-gray-900 text-white bg-red-500 rounded md:bg-transparent md:hover:text-red-500 md:p-0 md:dark:text-blue-500 md:hover:bg-transparent hover:bg-blue-400"
              aria-current="page"
            >
              Meals By Name
            </router-link>
          </li>
          <li class="md:mb-0 mb-2">
            <router-link
              :to="{ name: 'byLetter' }"
              class="block py-2 pl-3 pr-4 md:text-gray-900 text-white bg-red-500 md:bg-transparent rounded md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:hover:bg-transparent hover:bg-blue-400"
              >Meals By Letters</router-link
            >
          </li>
          <li class="md:mb-0 mb-2">
            <router-link
              :to="{ name: 'byIngredient' }"
              class="block py-2 pl-3 pr-4 md:text-gray-900 text-white bg-red-500 md:bg-transparent rounded md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:hover:bg-transparent hover:bg-blue-400"
              >Meals By Ingredients</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'ingredient' }"
              class="block py-2 pl-3 pr-4 md:text-gray-900 text-white bg-red-500 md:bg-transparent rounded md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:hover:bg-transparent hover:bg-blue-400"
              >Ingredients</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

//user profile
const profile = ref(false);
const openUserProfile = () => {
  profile.value = !profile.value;
};


// dropdownMenu
const dropdownMenu = ref(true);

const toggleDropdown = () => {
  dropdownMenu.value = !dropdownMenu.value;
};
</script>

<style>

</style>