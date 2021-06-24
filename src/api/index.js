import getEnvVars from "../../environment";

// La ruta principal para consultar a la API
const { apiUrl } = getEnvVars();

export const fetchPets = async () => {
  try {
    
    const endpoint = `${apiUrl}pets/?limit=25`;

    // Realizar la petición a la API. Esta petición debe ser asíncrona.
    const response = await fetch(endpoint);
    const data = await response.json();

    const petsInfo = () => {
      const promises = data.results.map(async (pets) => {
        return {
          ...pets,
          petsInfo: await searchPets(pets.name),
        };
      });

      return Promise.all(promises);
    };

    return { count: data.count, results: await petsInfo() };
  } catch (error) {
    console.log(error);
    return { count: 0 };
  }
};

export const searchPets = async (pets) => {
  try {
    const endpoint = `${apiUrl}pets/${pets}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};