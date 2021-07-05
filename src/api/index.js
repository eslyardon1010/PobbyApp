import getEnvVars from "../../environment";

//const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const { apiUrlbyTypeDrinkAlcoholic } = getEnvVars();
const { apiUrlbyTypeDrinkNonAlcoholic } = getEnvVars();
const { apiUrlbyGlassChampagne } = getEnvVars();
const { apiUrlbyOrdinaryDrink } = getEnvVars();
const { apiUrlbyCocktail } = getEnvVars();
const { apiUrlbyLetter } = getEnvVars();
const {apiUrlbyMostrar} = getEnvVars();
let name;

export const obtenerName = ({ obtener }) => {

    name = obtener;

}
export const fetchDrinkAlcoholic = async() => {
    try {
        const endpoint = `${apiUrlbyTypeDrinkAlcoholic}${name}`;

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
    



        export const searchDrink = async (name) => {
            try {
                const endpoint = `${apiUrlbyTypeDrinkAlcoholic}${name}`;

                const response = await fetch(endpoint);
                const data = await response.json();

                return data;
            } catch (error) {
                console.log(error);
            }
        };
    

        export const fetchDrinkNonAlcoholic = async () => {
            try {
                const endpoint = apiUrlbyTypeDrinkNonAlcoholic;

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
        export const fetchDrinkChampagne = async () => {
            try {
                const endpoint = apiUrlbyGlassChampagne;

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
        export const fetchDrinkOrdinary = async () => {
            try {
                const endpoint = apiUrlbyOrdinaryDrink;

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
        export const fetchDrinkCocktail = async () => {
            try {
                const endpoint = apiUrlbyCocktail;

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
export const fetchDrinkRandom = async () => {
            fetch("https://the-cocktail-db.p.rapidapi.com/randomselection.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4d6118df9dmshe93a4fe8432dd5cp1d2fd1jsnda87c09e8414",
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
        };


export const mostrarInfo = async() => {


    try {
        const endpoint = `${apiUrlbyMostrar}${name}`
        const response = await fetch(endpoint);
        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return {
            count: 0,
        }

    };

};


