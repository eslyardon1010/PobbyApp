import Constant from "expo-constants";
const ENV = {
  dev: {
    apiUrlbyName: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    apiUrlybyPopular: "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php",
    apiUrlbyRandom: "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php",
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
    apiUrlybyPopular: "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php",
    apiUrlbyRandom: "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php",
    apiUrlbyTypeDrinkAlcoholic: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    apiUrlbyTypeDrinkNonAlcoholic: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    apiUrlbyOrdinaryDrink: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink",
     apiUrlbyCocktail: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
    apiUrlbyGlass: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass",
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