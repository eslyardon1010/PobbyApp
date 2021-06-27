const cocktailsdb = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const fetchDrinks = async() => {
    try {
        const endpoint = cocktailsdb;

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

export default fetchDrinks;