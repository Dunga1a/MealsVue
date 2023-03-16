<template>   
    <!-- <Menu as="div" class="relative">
        <div>
            <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gradient-to-l to-orange-400 from-orange-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-600" aria-hidden="true" />
            </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="p-10 pl-20 pr-20 rounded-md bg-gradient-to-l to-orange-400 from-orange-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-slot="{ active }" class="grid grid-cols-5 md:grid-cols-5 gap-3">
                <div :class="active">
                    <div  class="bg-white rounded-xl shadow-2xl text-center pb-5 pt-5" v-for="areaMeal in areaMeals" :key="areaMeal.strArea">
                        <router-link :to="{name:'areaDetails', params:{idArea: areaMeal.strArea}}">
                            <h3 class="font-bold text-2xl">{{areaMeal.strArea}}</h3>
                        </router-link>
                    </div>
                </div>
            </MenuItem>
        </MenuItems>
        </transition>
    </Menu> -->

       
            <!-- <div class="cha" :class="{con:showLeft}">
                <div >hahdadhadad</div>
            </div>
            <div class="right" v-if="!showLeft">
                hohohohhohoho
            </div>
        </div> -->


    <div :class="{con:showLeft}" class="cha px-20 pb-10 my-10 grid grid-cols-5 md:grid-cols-5 gap-3">
        <div  class=" bg-white rounded-xl shadow-2xl text-center pb-5 pt-5" v-for="areaMeal in areaMeals" :key="areaMeal.strArea">
            <router-link :to="{name:'areaDetails', params:{idArea: areaMeal.strArea}}">
                <h3 class="font-bold text-2xl">{{areaMeal.strArea}}</h3>
            </router-link>
        </div>
    </div>
    <Menu>
        <MenuButton  @click="showLeft = !showLeft" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gradient-to-l to-orange-400 from-orange-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <ChevronDownIcon v-if="!showLeft" class="transition-all ease -mr-1 h-5 w-5 text-gray-600" />
            <ChevronUpIcon v-else class="transition ease-linear delay-500  -mr-1 h-5 w-5 text-gray-600" />
        </MenuButton>
    </Menu>
</template>

<script setup>
    import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
    import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/20/solid';
    import { onMounted, ref } from 'vue';
    const {areaMeal} = defineProps({
        areaMeals :{
            type: Array
        }
    });

    const showLeft = ref(false)

</script>

<style>
    .container {
        display: flex;
    }
    .left {
        flex: 1;
        background-color: #eee;
    }
    .right {
        flex: 1;
        background-color: #ccc;
    }

    .cha{
        height: 165px;
        overflow: hidden;
        transition: height ease-in-out .8s ;
    }

    .con {
        height: 520px;
    }
</style>