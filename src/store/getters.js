// const getters = {
//     paginatedMeals: state => {
//         const startIndex = (state.currentPage - 1) * state.perPage;
//         // Lấy số món ăn tương ứng với trang hiện tại
//         const pageMeals = state.meals.slice(startIndex, startIndex + state.perPage);
//         // Trả về dữ liệu mới cho component
//         return pageMeals;
//       },
//       totalPages: state => Math.ceil(state.meals.length / state.perPage),
// }

export function paginatedMeals(state) {
    const startIndex = (state.currentPage - 1) * state.perPage;
        // Lấy số món ăn tương ứng với trang hiện tại
    const pageMeals = state.meals.slice(startIndex, startIndex + state.perPage);
        // Trả về dữ liệu mới cho component
    return pageMeals;
}

export function totalPages(state) {
    return Math.ceil(state.searchedMeals.length / state.perPage)
}