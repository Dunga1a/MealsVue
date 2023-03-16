<template>
    <header class="bg-gradient-to-b from-orange-400 to-orange-300 shadow h-16 flex justify-between items-stretch">
        <router-link :to="{name:'home'}" class="flex flex-1 items-center h-full px-5">
            <img src="../assets/2.png" alt="" class="max-w-[6%] rounded-full">
            <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-400">MEALS</h1>
        </router-link>
        <div class="flex items-center gap-1">
            <router-link :to="{name:'byName'}" class="font-extrabold shadow-xl inline-flex transition-color text-lg items-center px-3 h-full hover:bg-orange-800 focus:bg-orange-900 text-white text-bold">
                Search Meals
            </router-link>
            <router-link :to="{name:'byLetter'}" class="font-extrabold shadow-xl inline-flex transition-color text-lg items-center px-3 h-full hover:bg-orange-800 focus:bg-orange-900 text-white text-bold">
                Meals By Letter
            </router-link>
            <router-link :to="{name:'Ingredients'}" class="font-extrabold shadow-xl inline-flex transition-colortext-lg items-center px-3 h-full hover:bg-orange-800 focus:bg-orange-900 text-white text-bold">
                Meals By Ingredients
            </router-link>
        </div>
    </header>
</template>
  
<script setup>
  
</script>
  
<style>
  
</style>