
export  default{
    // meals by name
    setSearchMeals(state,meals) {
        state.searchMealsData=meals || []
    },
        // meals by letter
    setMealsByLetter(state,meal){
        state.mealsByLetter=meal || []
    },

    // meals by ingredient

    setMealsByIngredients(state,meals){
        state.mealsByIngredients=meals || []
    }

}