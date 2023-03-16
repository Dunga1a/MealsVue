<template>

  <div class="p-10 font-extrabold relative bg-gradient-to-r from-orange-200 to-orange-300">
    <h1 class="text-[3rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>

  <Meals :meals="meals"/>
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Meals from '../components/Meals.vue';
  import store from '../store';

  const route = useRoute();
  const ingredient = computed(() => store.state.ingredient)
  const meals = computed(() => store.state.mealsByIngredient)

  onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
  })
</script>

<style>

</style>