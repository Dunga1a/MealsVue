  <template>
    <div class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 pb-5 shadow bg-gradient-to-r from-orange-400 to-orange-300">
      <!-- <div v-for="item in paginatedData" :key="item.id">{{ item }}</div> -->
      <MealItem v-for="meal in paginatedData" :key="meal.idMeal" :meal="meal"/>
    </div>
      <!-- <span>Page {{ currentPage }} of {{ totalPages }}</span> -->
      <div class="text-center p-10">
        <ul class="inline-flex items-center shadow text-[20px] text-gray-600 rounded-lg bg-white">
          <li>
            <button :disabled="currentPage === 1" @click="currentPage--" 
              class="block p-[10px] ml-0 text-gray-500 bg-white rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" 
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                  clip-rule="evenodd">
                </path>
              </svg>
            </button>
          </li>
          <li v-for="page in totalPages" :key="page" @click.prevent="currentPage = page" 
            class="p-[10px] z-10 border  border-blue-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" 
            :class="{'bg-blue-400 text-white': page === currentPage}">
            <a class=" ">{{ page }}</a>
          </li>
          <li>
            <button :disabled="currentPage === totalPages" @click="currentPage++"
              class="block p-[10px] text-gray-500 bg-white rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clip-rule="evenodd">
                </path>
              </svg>
            </button>
          </li>
        </ul>
    </div>
  </template>
  
  <script>
    import MealItem from './MealItem.vue'
    export default {
      components:{MealItem},
      props: {
        meals: {
          type: Array,
          required: true,
        },
        pageSize: {
          type: Number,
          default: 10,
        },
      },
      data() {
        return {
          currentPage: 1,
        };
      },
      computed: {
        totalPages() {
          return Math.ceil(this.meals.length / this.pageSize);
        },
        // pageCount() {
        //         return Math.ceil(this.meals.length / this.pageSize);
        // },
        paginatedData() {
          const startIndex = (this.currentPage - 1) * this.pageSize;
          const endIndex = startIndex + this.pageSize;
          return this.meals.slice(startIndex, endIndex);
        },
      },
    };
  </script>
<!-- <template>
     <ul class="pagination">
    <li 
      class="pagination-item"
    >
      <button 
        type="button" 
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
        aria-label="Go to first page"
      >
        First
      </button>
    </li>

    <li
      class="pagination-item"
    >
      <button 
        type="button" 
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        aria-label="Go to previous page"
      >
        Previous
      </button>
    </li>

    <li v-for="page in pages" class="pagination-item" :key="page">
      <button 
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
        :aria-label="`Go to page number ${page.name}`"
        
      >
        {{ page.name }}
      </button>
    </li>

    <li class="pagination-item">
      <button 
        type="button" 
        @click="onClickNextPage"
        :disabled="isInLastPage"
        aria-label="Go to next page"
      >
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button 
        type="button" 
        @click="onClickLastPage"
        :disabled="isInLastPage"
        aria-label="Go to last page"
      >
        Last
      </button>
    </li>
  </ul>
</template>

<script>
    export default {
        name: 'pagination',
        props: {
            maxVisibleButtons: {
                type: Number,
                required: false,
                default: 3
            },
            totalPages: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            perPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            },
        },
        computed: {
            startPage() {
                if (this.currentPage === 1) {
                    return 1;
                }

                if (this.currentPage === this.totalPages) { 
                    return this.totalPages - this.maxVisibleButtons + 1;
                }

                return this.currentPage - 1;

            },
            endPage() {
            
                return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
            
            },
            pages() {
                const range = [];

            for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
                range.push({
                name: i,
                isDisabled: i === this.currentPage 
                });
            }

            return range;
            },
            isInFirstPage() {
                return this.currentPage === 1;
            },
            isInLastPage() {
                return this.currentPage === this.totalPages;
            },
        },
        methods: {
            onClickFirstPage() {
                this.$emit('pagechanged', 1);
            },
            onClickPreviousPage() {
                this.$emit('pagechanged', this.currentPage - 1);
            },
            onClickPage(page) {
                this.$emit('pagechanged', page);
            },
            onClickNextPage() {
                this.$emit('pagechanged', this.currentPage + 1);
            },
            onClickLastPage() {
                this.$emit('pagechanged', this.totalPages);    
            },
            isPageActive(page) {
                return this.currentPage === page;
            },
        }
    };

    // new Vue({
    // el: '#app',
    // name: 'app',
    // components: {
    //     pagination: Pagination,
    // },
    // data () {
    //     return {
    //     currentPage: 1,
    //     };
    // },
    // methods: {
    //     onPageChange(page) {
    //     console.log(page)
    //     this.currentPage = page;
    //     }
    // },
    // })
</script>

<style>
    .pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
</style> -->

<!-- <template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-20 pb-5 shadow bg-gradient-to-r from-orange-400 to-orange-300">
        <MealItem v-for="item in pagedItems" :key="item.idMeal" :meal="item" />
    </div>
    <div class="text-center p-10">
          <ul class="inline-flex shadow bg-green-200">
            <li v-for="page in pageCount" :key="page" @click.prevent="currentPage = page" class="p-[10px] z-10 border  border-blue-300 text-gray-600" :class="{'bg-green-500': page === currentPage}">
              <a class=" "
                >{{ page }}</a>
            </li>
          </ul>
    </div>

</template> -->
  
<!-- <script>
    import MealItem from './MealItem.vue';
    export default {
        components: {MealItem},
        props: {
            items: {
                type: Array,
                required: true,
            },
            pageSize: {
                type: Number,
                default: 10,
            },
            // meals: {
            //     required: true,
            //     type: Array,
            // }
        },
        data() {
            return {
                currentPage: 1,
            };
        },
        computed: {
            pageCount() {
                return Math.ceil(this.items.length / this.pageSize);
            },
            pagedItems() {
                const start = (this.currentPage - 1) * this.pageSize;
                const end = start + this.pageSize;
                return this.items.slice(start, end);
            },
        },
    };
</script> -->

<!-- <template>
  <div>
    <ul class="pagination">
      <li>
        <a href="#" @click.prevent="previousPage" :disabled="currentPage === 1">Previous</a>
      </li>
      <li v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
        <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li>
        <a href="#" @click.prevent="nextPage" :disabled="currentPage === pageCount">Next</a>
      </li>
    </ul>
  </div>
</template> -->

<!-- <script>
  import { ref, computed } from 'vue';

  export default {
    name: 'Pagination',
    props: {
      totalItems: {
        type: Number,
        required: true,
      },
      pageSize: {
        type: Number,
        required: true,
      },
      currentPage: {
        type: Number,
        default: 1,
      },
    },
    setup(props, { emit }) {
      const pageCount = computed(() => Math.ceil(props.totalItems / props.pageSize));
      const pages = computed(() => {
        const range = [];
        for (let i = 1; i <= pageCount.value; i++) {
          range.push(i);
        }
        return range;
      });

      function changePage(page) {
        emit('update:currentPage', page);
      }

      function previousPage() {
        if (currentPage.value > 1) {
          emit('update:currentPage', currentPage.value - 1);
        }
      }

      function nextPage() {
        if (currentPage.value < pageCount.value) {
          emit('update:currentPage', currentPage.value + 1);
        }
      }

      return {
        pageCount,
        pages,
        changePage,
        previousPage,
        nextPage,
      };
    },
  };
</script> -->

<!-- <style>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .pagination li {
    margin: 0 4px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  .pagination li.active {
    background-color: #4CAF50;
    color: white;
  }

  .pagination li a {
    color: #666;
    text-decoration: none;
    padding: 8px 16px;
  }
</style> -->

