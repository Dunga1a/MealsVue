<template>
  <div class="p-10 pl-20 pr-20 mt-10 grid grid-cols-1 md:grid-cols-5 gap-3">
        <div class="bg-white rounded-xl shadow-2xl text-center pb-5 pt-5" v-for="areaMeal in areaMeals" :key="areaMeal.strArea">
            <router-link :to="{name:'areaDetails', params:{idArea: areaMeal.strArea}}">
                <h3 class="font-bold text-2xl">{{areaMeal.strArea}}</h3>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    const {areaMeal} = defineProps({
        areaMeals :{
            type: Array
        }
    })
</script>

<style>

</style>