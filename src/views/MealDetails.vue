<template>
  <div class="max-w-[800px] mx-auto p-10 shadow-lg shadow-indigo-500/40">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea}}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> <p class="break-all">{{ meal.strTags }}</p>
      </div>
    </div>
    <div>
      <p class="break-all">{{ meal.strInstructions }}</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="el">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1}}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) in new Array(20)" :key="el">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{meal[`strMeasure${ind + 1}`]===''?'':ind+1}}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-5">
      <WatchYouTube :href="meal.strYoutube" class="ml-5">YouTube</WatchYouTube>
      <a :href="meal.strSource"
        target="_blank" 
        class="ml-4 bg-blue-300 hover:bg-blue-500 hover:text-white transition-colors py-2 px-4 rounded"
      > 
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import { useRoute} from 'vue-router';
  import axiosClient from '../axiosClient';
  import WatchYouTube from '../components/WatchYouTube.vue';

  const route = useRoute();
  const meal = ref({});

  onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
      .then(({data}) =>{
        console.log(data);
        meal.value = data.meals[0] || {}
      })
  })

</script>

<style>

</style>