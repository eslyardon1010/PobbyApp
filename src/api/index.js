import getEnvVars from "../../environment";

const { apiUrlbyTypeDrinkAlcoholic } = getEnvVars();
const { apiUrlbyTypeDrinkNonAlcoholic } = getEnvVars();
const { apiUrlbyGlassChampagne } = getEnvVars();
const { apiUrlbyOrdinaryDrink } = getEnvVars();
const { apiUrlbyCocktail } = getEnvVars();
const { apiUrlbyMostrar } = getEnvVars();
const {apiUrlbyRandom} = getEnvVars();
const {apiUrlybyPopular} = getEnvVars();

let name;
export const obtenerName = ({ obtener }) => {

    name = obtener;
  console.log(name);
}

export const fetchDrinkPopular = async() => {
    try {
        const endpoint = apiUrlybyPopular;

        // PETICION A LA API
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return { count: 0 };
    }
};


export const fetchDrinkAlcoholic = async() => {
    try {
        const endpoint = apiUrlbyTypeDrinkAlcoholic;

        // PETICION A LA API
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return { count: 0 };
    }
};




export const searchDrink = async(name) => {
    try {
        const endpoint = `${apiUrlbyTypeDrinkAlcoholic}${name}`;

        const response = await fetch(endpoint);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};


export const fetchDrinkNonAlcoholic = async() => {
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
export const fetchDrinkChampagne = async() => {
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
export const fetchDrinkOrdinary = async() => {
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
export const fetchDrinkCocktail = async() => {
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
export const fetchDrinkRandom = async() => {
      try {
        const endpoint = apiUrlbyRandom;

        // PETICION A LA API
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return { count: 0 };
    }
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


export const searchCocktail = async(name) => {


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