<template>
    <Carousel :items-to-show="3" :wrap-around="true" :autoplay="2000">
        <Slide v-for="categorie in categories" :key="categorie.idCategory" class="pt-[40px] pb-[40px] hover:bg-orange-500">
            <router-link :to="{name:'categoryDetails', params:{idCategories: categorie.strCategory}}" class=" ">
                <img :src="categorie.strCategoryThumb" alt="strMeal" class="rounded-xl h-48 object-cover w-full drop-shadow-lg">
                <h3 class="font-bold text-2xl">{{categorie.strCategory}}</h3>
            </router-link>
        </Slide>
        <template #addons>
            <navigation />
            <pagination />
        </template>
    </Carousel>
            


</template>

<script setup>
    import { Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
    
    import 'vue3-carousel/dist/carousel.css'
    const {categorie} = defineProps({
        categories: {
            type: Array
        }
    })
</script>

<style scoped>
    .slide {
    padding: 1rem;
    border: 1px solid #ccc;
    }
</style>