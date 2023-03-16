<template>

    <div class="p-10 leading-[1] font-extrabold relative bg-gradient-to-r from-orange-200 to-orange-300">
        <h1 class="text-[3rem] pb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Area Meals</h1>
    </div>

    <AreaMeals :areaMeals="areaMeals"/>

    <div class="p-10 leading-[1] font-extrabold relative bg-gradient-to-r from-orange-200 to-orange-300">
        <h1 class="text-[3rem] pb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Categories</h1>
    </div>

    <Categories :categories="categories"/>

    <RandomMeal/>

    <Footer/>
    
</template>

<script setup>
    import { computed, onMounted, ref } from 'vue';
    import store from '../store';
    import axiosClinet from '../axiosClient';
    import Categories from '../components/Categories.vue';
    import RandomMeal from '../components/RandomMeal.vue';
    import AreaMeals from '../components/AreaMeals.vue';
    import Footer from './Footer.vue';

    const categories = ref([])
    const areaMeals = ref([])

    onMounted( async()=>{
        for( let i = 0; i < 20 ; i++ ) {
            const response = await axiosClinet.get('/categories.php')
            categories.value = response.data.categories
        }
    })

    onMounted(() => {
                axiosClinet.get('list.php?a=list').then(({ data }) => {
                    areaMeals.value = data.meals;
                });
            });
</script>

<style>

</style>