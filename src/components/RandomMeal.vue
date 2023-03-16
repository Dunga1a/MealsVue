<template>
    <div class="p-10 font-extrabold relative bg-gradient-to-r from-orange-200 to-orange-300">
        <h1 class="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Random Meals</h1>
    </div>
    <Meals :meals="meals" />
    
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import axiosClient from '../axiosClient';
    import Meals from '../components/Meals.vue';
    

    const meals = ref([])
    
    onMounted( async()=>{
        for( let i = 0; i < 20 ; i++ ) {
            const response = await axiosClient.get('/random.php')
            meals.value.push(response.data.meals[0])
        }
    });

    

    
</script>

<style>

</style>