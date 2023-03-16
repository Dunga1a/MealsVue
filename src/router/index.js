import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import SearchByName from '../views/SearchByName.vue';
import SearchByIngredients from '../views/SearchByIngredients.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import MealDetails from '../views/MealDetails.vue';
import Ingredients from '../views/Ingredients.vue';
import CategorieDetails from '../views/CategorieDetails.vue';
import AreaDetails from '../views/AreaDetails.vue';


const routes = [

    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: SearchByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: SearchByLetter
            },
            {
                path: '/by-ingredients/:ingredient?',
                name: 'byIngredients',
                component: SearchByIngredients
            },
            {
                path: '/ingredients',
                name: 'Ingredients',
                component: Ingredients
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            },
            {
                path: '/category/:idCategories',
                name: 'categoryDetails',
                component: CategorieDetails
            },
            {
                path: '/areaMeal/:idArea',
                name: 'areaDetails',
                component: AreaDetails
            }
        ],
    },
    {
        path: '/guest',
        component: GuestLayout,
        children: [
            
        ],
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router