<template>
  <div>
    <!-- <Pagination :items="meals" :page-size="6"/> -->
      <!-- <MealItem v-for="(item, index) in paginatedData" :key="index" :meal="item" /> -->
      <!-- <div v-for="meal in meals" :key="meal.idMeal">
        <MealItem :meal="meal" />
      </div> -->
      <!-- {{ parseInt(meals.length) }} -->
      <!-- <VPagination
        :currentPage="currentPage"
        :perPage="perPage"
        :total="total"
        @pageChange="onPageChange"
      /> -->
        <Pagination :meals="meals" :page-size="6"/>
      <!-- <v-pagination
        v-model="currentPage"
        :pages="totalPages"
        :range-size="6"
        active-color="#DCEDFF"
        @update:modelValue="updatePage"
      /> -->
    </div>
    <!-- <div v-else class="flex justify-center text-gray-600 p-8">
      There are no meals
    </div> -->

    <!-- <Pagination

        :total-pages="parseInt(meals/5)"
        :total="parseInt(meals.length)"
        :per-page="parseInt(meals.length/3)"
        :current-page="currentPage"
        @pagechanged="onPageChange"
    /> -->
    
</template>
  
<script setup>
  import { ref, watch, computed } from 'vue';
  //import store from '../store'
  import MealItem from './MealItem.vue';
  import Pagination from '../components/Pagination.vue'
  // import VPagination from "@hennge/vue3-pagination";
  // import "@hennge/vue3-pagination/dist/vue3-pagination.css";

  // const currentPage = ref(1);
  // const perPage = ref(6);
  // const total = ref(20);

  // const data = ref([]);
  //const currentPage = ref(1);
  //const perPage = ref(6);

  // const totalPages = computed(() => Math.ceil(data.value.length / perPage.value));
  const { meals } = defineProps({
    meals: {
      required: true,
      type: Array,
    }
  });
  console.log(meals);
  // const startIndex = computed(() => (currentPage.value - 1) * perPage.value);
  // const paginatedData = computed(() => meals.slice(startIndex.value, startIndex.value + perPage.value));


  // // function fetchData() {
  // //   // const startIndex = (currentPage.value - 1) * perPage.value;
  // //   // // Lấy số món ăn tương ứng với trang hiện tại
  // //   // const pageMeals = meals.slice(startIndex, startIndex + perPage.value);
  // //   // // Trả về dữ liệu mới cho component
  // //   // return pageMeals;
  // //   data.value = meals
  // //   console.log(data.value)
  // // }
  // function updatePage(page) {
  //     currentPage.value = page;
  //     fetchData();
  // }

  // function fetchData() {
  //   const startIndex = (currentPage.value - 1) * perPage.value;
  //   const pageMeals = meals.slice(startIndex, startIndex + perPage.value);
  //   paginatedData.value = pageMeals;
  // }

  // const paginatedMeals = computed(() => store.getters.paginatedMeals);
  //   const currentPage = computed(() => store.state.currentPage);
  //   const totalPages = computed(() => store.getters.totalPages);

  //   function updatePage(page) {
  //     store.commit('setCurrentPage', page);
  //   }

  //   store.dispatch('searchMeals');



    // const paginatedData = computed(() => {
    //   const start = (currentPage.value - 1) * perPage.value;
    //   console.log(start)
    //   const end = start + perPage.value;
    //   console.log(end)

    //   return data.value.slice(start, end);
    // });


  // function onPageChange(page) {
  //     currentPage.value = page;
  //     fetchData();
  //   }


  // totalPages.value = Math.ceil(meals.length / perPage.value);

  // function updateHandler(page) {
  //   currentPage.value = page;
  // }

  // lắng nghe sự thay đổi của biến currentPage
  // watch(currentPage, () => {
  //   // tính lại số trang dựa vào số lượng món ăn và số lượng món ăn hiển thị trên mỗi trang
  //   totalPages.value = Math.ceil(meals.length / perPage.value);
  // });

  // function updateHandler(page) {
  // currentPage.value = page;

  // // tính index bắt đầu và index kết thúc của món ăn trên trang hiện tại
  // const startIndex = (currentPage.value - 1) * perPage.value;
  // const endIndex = startIndex + perPage.value;

  // // lấy ra danh sách món ăn của trang hiện tại và hiển thị trên trang web
  // const currentMeals = meals.slice(startIndex, endIndex);
  // }

</script>