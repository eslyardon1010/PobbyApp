import getEnvVars from "../../environment";

//const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const { apiUrlbyRandom } = getEnvVars();
const { apiUrlbyLetter } = getEnvVars();
export const fetchDrinks = async() => {
    try {
        const endpoint = apiUrlbyRandom;

        // PETICION A LA API
        const response = await fetch(endpoint);
        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return { count: 0 };
    }
};

export const fetchDrinksLetter = async () => {
       try {
        const endpoint = apiUrlbyLetter;

        // PETICION A LA API
        const response = await fetch(endpoint);
        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return { count: 0 };
    }
}