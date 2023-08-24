import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'

import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredient from '../views/Ingredient.vue'

import NotFound from '../views/NotFound.vue'


const routes = [
    {
        path: '/',
        component:DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/ingredient',
                name: 'ingredient',
                component: Ingredient
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredient
            },
            {
                path:'/meal/:id?',
                name:'mealDetails',
                component:MealDetails
            },
            {
                path:'/:pathMatch(.*)*',
                name:'notFound',
                component:NotFound,
            }

        ]
    },
    {
        path:'/guest',
        component:GuestLayout,
    }



]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;