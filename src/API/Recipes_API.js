import axios from "axios"
import { RECIPE_ENDPOINTS } from "./Recipes_endpoints"

export const fetchAllRecipes = async () =>{
    try {
        const response = await axios.get(RECIPE_ENDPOINTS.ALL_RECIPES);
        return response.data.recipes
    } catch (error) {
        console.log("Error in all recipes function --->",error)
    }
}

export const fetchBannerRecipes = async() =>{
    try {
        const response = await axios.get(RECIPE_ENDPOINTS.BANNER_RECIPES);
        const allData = response.data
        console.log(allData,"data from banner function")
        return allData
    } catch (error) {
        console.log("Error in all recipes function --->",error)
    }
}


export const getPopularRecipes = async () => {
  try {
    const response = await axios.get(RECIPE_ENDPOINTS.ALL_RECIPES);
    const allRecipes = response.data.recipes;
    const filteredRecipes = allRecipes.filter(item => item.id > 10 && item.id < 20);
    return filteredRecipes;
  } catch (error) {
    console.log("Error in getPopularRecipes function:", error.message);
    return [];
  }
};

// Getting Popular three recipes 
export const getPopularThreeRecipes = async () => {
  try {
    const response = await axios.get(RECIPE_ENDPOINTS.ALL_RECIPES);
    const allRecipes = response.data.recipes;
    const filteredRecipes = allRecipes.filter(item => item.id > 20 && item.id < 24 );
        console.log(filteredRecipes,"data from three recipes function")
    return filteredRecipes;
  } catch (error) {
    console.log("Error in threee fucntion function:", error.message);
    return []; 
  }
};

// editor's choice reciopes 

export const getEditorsChoiceRecipes = async()=>{
  try {
    const response = await axios.get(RECIPE_ENDPOINTS.EDIOR_CHOICE_RECIPES)
    const allRecipes = response.data.recipes;
    const filteredRecipes = allRecipes.filter(item=> item.id > 5 && item.id < 15);
    return filteredRecipes
  } catch (error) {
    console.log(error,"during editor api ")
  }
}
