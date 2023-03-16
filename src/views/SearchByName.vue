<template>
    <div class="p-8 pg-0">
      <input type="text" class=" w-full bg-gray-100 text-gray-700 border border-gray-200 rounded"
            placeholder="Search for Meals"
            @change="searchMeals"
            v-model="keyword"
        />
    </div>
    <!-- <div v-if="meals.length"> -->
      <Meals :meals="meals" v-if="meals.length"/>
      <RandomMeal v-else/>
    <!-- </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 p-20 shadow bg-gradient-to-r from-orange-400 to-orange-300">
      Bạn hãy tìm món ăn mà bạn muốn
    </div> -->

  </template>

<script setup>
  import {computed, onMounted, ref} from 'vue';
  import { useRoute } from 'vue-router';
  import store from '../store/index.js';
  import Meals from '../components/Meals.vue';
  import RandomMeal from '../components/RandomMeal.vue';


  const route = useRoute();
  const keyword = ref('')
  const meals = computed(()=> store.state.searchedMeals)
  function searchMeals() {
    if(keyword.value) {
      store.dispatch('searchMeals', keyword.value);
      keyword.value = ''
    }else {
      store.commit('setSearchedMeals', []);
    }
  }

  onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value) {
      searchMeals()
    }
  })
</script>
  
<style>
  
</style>