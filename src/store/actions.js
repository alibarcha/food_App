import axiosClient from "../axiosClient"
// search meals function
export default {

  searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
      .then(({ data }) => {
        commit('setSearchMeals', data.meals)
      })
  }

}