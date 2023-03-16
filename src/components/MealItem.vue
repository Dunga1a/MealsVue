<template>
    <div v-if="!meal.length" >
        <div  class="bg-white rounded-xl shadow-2xl">
            <img :src="meal.strMealThumb" alt="strMeal" class="rounded-xl h-48 object-cover w-full">
            <div class="p-3 ">
              <h3 class="font-bold line-clamp-1">{{meal.strMeal}}</h3>
              <p class="mb-5 line-clamp-3 break-all">{{meal.strInstructions}}</p>
              <div class="flex justify-between items-center">
                <WatchYouTube :href="meal.strYoutube">Watch Video</WatchYouTube>
                <router-link :to="{name:'mealDetails', params:{id: meal.idMeal}}"
                class="bg-green-500 hover:bg-green-600 hover:text-white transition-colors py-2 px-4 rounded"
                >View</router-link>
              </div>
            </div>
        </div>
    </div>
    <div v-else></div>
    <!-- <div>
        <Pagination 
            :total-pages="parseInt(meal.length/5)"
            :total="parseInt(meal.length)"
            :per-page="parseInt(meal.length/3)"
            :current-page="currentPage"
            @pagechanged="onPageChange"
        />
    </div> -->
    <!-- <Pagination 
        :total-pages="parseInt(meals.length/5)"
        :total="parseInt(meals.length)"
        :per-page="parseInt(meals.length/3)"
        :current-page="currentPage"
        @pagechanged="onPageChange"
    /> -->
</template>

<script setup>
    //import { ref } from 'vue';
    import WatchYouTube from './WatchYouTube.vue';
    //import Pagination from './Pagination.vue';

    defineProps({
            meal: {
                required: true,
                type: Object,
            }
        })

    // const currentPage = ref(1)
    // const onPageChange = (page)=> {
    // console.log(page);
    // currentPage.value = page;
//   }


</script>

<style>

</style>