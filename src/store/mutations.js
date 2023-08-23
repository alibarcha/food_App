
export  default{
    // meals by name
    setSearchMeals(state,meals) {
        state.searchMealsData=meals
    },
        // meals by letter
    setMealsByLetter(state,meal){
        state.mealsByLetter=meal
    }

}