<template>
        <div class="p-8 pb-3 bg-gradient-to-tr from-orange-400 to-orange-200">
          <h1 class=" rounded-tl-[55%] rounded-br-[55%] shadow p-5 inline-block text-4xl bg-white font-bold text-orange-500">Ingredients</h1>
        </div>
        <div class="px-8 mt-10">
          <input
            type="text"
            v-model="keyword"
            class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
            placeholder="Search for Ingredients"
          />
          <div class="mt-10 grid grid-cols-1 md:grid-cols-4 gap-3">
            <a href="#"
              @click.prevent="openIngredient(ingredient)"
              v-for="ingredient of computedIngredients"
              :key="ingredient.idIngredient"
              class="block bg-white rounded p-3 mb-3 shadow"
            >
              <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            </a>
          </div>
        </div>
</template>

<script setup>
    import store from '../store';
    import { computed, ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import axiosClient from '../axiosClient';

            const router = useRouter();
            const keyword = ref('');
            const ingredients = ref([]);

            const computedIngredients = computed(() => {
                if(!computedIngredients) return ingredients;
                return ingredients.value.filter((i) => 
                    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
            });

            function openIngredient(ingredient) {
                store.commit('setIngredient', ingredient)
                router.push({
                    name: "byIngredients",
                    params: { ingredient: ingredient.strIngredient },
                });
            }

            onMounted(() => {
                axiosClient.get('list.php?i=list').then(({ data }) => {
                    ingredients.value = data.meals;
                });
            });
</script>
<style>

</style>