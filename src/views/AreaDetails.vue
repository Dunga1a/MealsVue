<template>
    <div  class="p-20 mt-10 grid grid-cols-1 md:grid-cols-4 gap-3">
        <div class="p-3 pb-10 bg-white rounded-xl border shadow-inner shadow-cyan-500" v-for="areaMeal in areaMeals" :key="areaMeal.idMeal">
            <router-link :to="{name:'mealDetails', params:{id: areaMeal.idMeal}}">
                <img :src="areaMeal.strMealThumb" alt="strMeal" class="rounded-xl h-48 object-cover w-full drop-shadow-lg">
                <h3 class="font-bold pt-3">{{areaMeal.strMeal}}</h3>
            
            </router-link>
            <!-- <p class="mb-5 break-all">{{categorie.strMealThumb}}</p> -->
        </div>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { onMounted, ref } from 'vue'
    import axiosClient from '../axiosClient';


    const route = useRoute()
    const areaMeals = ref({})

    onMounted(async() => {
        const response = await axiosClient.get(`/filter.php?a=${route.params.idArea}`)
        response.data = new Object(response.data)
        console.log(response.data);
        areaMeals.value = response.data.meals
        // console.log(response.data);
    })
</script>

<style>

</style>