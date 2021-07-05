import Constant from "expo-constants";
const ENV = {
  dev: {
    apiUrlbyName: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    apiUrlbyLetter: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
    apiUrlbyIngredient: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka",
    apiUrlbyId: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007",
    apiUrlbyIngredientId: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552",
    apiUrlbyRandom: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    apiUrlbyTypeDrinkAlcoholic: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    apiUrlbyTypeDrinkNonAlcoholic: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    apiUrlbyOrdinaryDrink: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink",
     apiUrlbyCocktail: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
    apiUrlbyGlass: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass",
    apiUrlbyGlassChampagne: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute",
    apiUrlbyMostrar: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
  },
  production: {
    apiUrlbyName: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    apiUrlbyLetter: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
    apiUrlbyIngredient: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka",
    apiUrlbyId: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007",
    apiUrlbyIngredientId: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552",
    apiUrlbyRandom: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    apiUrlbyTypeDrinkAlcoholic: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    apiUrlbyTypeDrinkNonAlcoholic: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    apiUrlbyCategory: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink",
    apiUrlbyGlassChampagne: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute",
    apiUrlbyMostrar: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
  },
};
const getEnvVars = (env = Constant.manifest.releaseChannel) => {
  if (__DEV__) return ENV.dev;
  else if (env === "staging") return ENV.dev;
  else if (env === "production" || env === "default") return ENV.production;
};
export default getEnvVars;