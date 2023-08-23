import axiosClient from "../axiosClient"
// search meals function
export default {
  // melas by name
  searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
      .then(({ data }) => {
        commit('setSearchMeals', data.meals)
      })
  },

  // meals by letter
  searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
      .then(({ data }) => {
        commit('setMealsByLetter', data.meals)
      })
  },

  // melas by ingredient
  searchMealsByIngredient({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
      .then(({ data }) => {
        commit('setMealsByIngredients', data.meals)
      })
  }


}