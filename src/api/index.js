import getEnvVars from "../../environment";

const { apiUrlbyTypeDrinkAlcoholic,
    apiUrlbyTypeDrinkNonAlcoholic,
    apiUrlbyGlassChampagne,
    apiUrlbyOrdinaryDrink,
    apiUrlbyCocktail,
    apiUrlbyMostrar,
    apiUrlbyRandom,
    apiUrlybyPopular
} = getEnvVars();


/*FUNCION PARA CAPTURAR LOS NOMBRES, DE ESTA DEPENDE EL SEARCH RESULTS Y PANTALLA DE INFO*/
let name;
export const obtenerName = ({ obtener }) => {

    name = obtener;
  console.log(name);
}

/*FUNCION FETCH PARA HACER LA PETICION A LA API Y
 NOS DA COMO RESPUESTA LAS BEBIDAS MAS POPULARES, 
 DE ESTA DEPENDE EL COMPONENTE POPULAR EN LA PANTALLA CATSCREENS*/
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


/*A CONTINUACION SE MUESTRAN TODOS LOS METODOS QUE SE UTILIZAN PARA LA PANTALLA CATSCREENS */
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

/*CONSEGUIR LAS BEBIDAS NO ALCOHOLICAS*/

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


 /*CONSEGUIR TODAS LAS BEBIDAS QUE SON CHAMPAGNE */

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

/*PARA BEBIDAS ORDINARIAS */
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


/*TODAS LAS BEBIDAS DE TIPO COCKTEL */
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

/*UNA LISTA DE 10 BEBIDAS RANDOM */
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



/*METODO PARA MOSTRAR LA INFORMACION, DE ESTE DEPENDE LA PANTALLA INFO, SE RECIBE EL PARAMETRO NAME 
QUE VIENE DEL METODO OBTENER, EL PARAMETRO NAME TRAE EL NOMBRE DE LA BEBIDA QUE ES EL PARAMETRO QUE 
ESPERA LA URL COLOCADA EN ENVIRONMENT

ESTE MISMO METODO LO ESTAMOS USANDO PARA BUSCAR CUALQUIER BEBIDA POR NOMBRE, ES EL MISMO PROCESO , 
ASI QUE OPTAMOS POR UNA REUTILIZACION DE CODIGO.*/
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

