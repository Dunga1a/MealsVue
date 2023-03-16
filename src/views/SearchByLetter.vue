<template>
  <div>
    <div class="flex gap-2 mt-2 justify-center">
      <router-link :to="{name:'byLetter', params: {letter}}" v-for="letter of letters" v-bind:key="letter">
        {{ letter }}
      </router-link>
    </div>
  </div>
  <Meals :meals="meals"/>
</template>
  
<script setup>
  import { computed, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import Meals from '../components/Meals.vue';
  import store from '../store';

  const route = useRoute();
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const meals = computed(() => store.state.mealsByLetter
  )
  console.log(meals)

  watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
  })

  onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
  })

</script>
  
<style>
  
</style>