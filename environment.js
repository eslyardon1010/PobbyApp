import Constant from "expo-constants";
const ENV = {
  dev: {
    apiUrlbyName: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    apiUrlbyLetter: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
    apiUrlbyIngredient: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka",
    apiUrlbyId: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007",
    apiUrlbyIngredientId: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552",
    apiUrlbyRandom: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    apiUrlbyTypeDrink: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    apiUrlbyCategory: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink",
    apiUrlbyGlass: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass",
  },
  production: {
    apiUrlbyName: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    apiUrlbyLetter: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
    apiUrlbyIngredient: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka",
    apiUrlbyId: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007",
    apiUrlbyIngredientId: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552",
    apiUrlbyRandom: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    apiUrlbyTypeDrink: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    apiUrlbyCategory: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink",
    apiUrlbyGlass: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass",
  },
};
const getEnvVars = (env = Constant.manifest.releaseChannel) => {
  if (__DEV__) return ENV.dev;
  else if (env === "staging") return ENV.dev;
  else if (env === "production" || env === "default") return ENV.production;
};
export default getEnvVars;