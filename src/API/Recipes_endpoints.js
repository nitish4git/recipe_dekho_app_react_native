const BASE_URL = "https://dummyjson.com"


export const RECIPE_ENDPOINTS = {
  ALL_RECIPES: `${BASE_URL}/recipes`,
  BANNER_RECIPES: `${BASE_URL}/recipes?limit=5`,
  EDIOR_CHOICE_RECIPES:`${BASE_URL}/recipes?limit=10`,
  SINGLE_RECIPE: (id) => `${BASE_URL}/recipes/${id}`,
  SEARCH_RECIPES: (query) => `${BASE_URL}/recipes/search?q=${query}`,
};