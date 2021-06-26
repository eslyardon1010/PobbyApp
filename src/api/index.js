import React from 'react'
const apiUrl = 'www.thecocktaildb.com/api/json/v1/1/list.php?a=list';
const Nosotros = () => {
    
    //el useEffect se ejecuta cuando el componente ya ha sido cargado, osea de ultimo
    const  [ drinks, setDrinks] = React.useState([]);

    React.useEffect(()=>{
        obtenerDatos();
    },[])//lo ponemos asi para que solo se ejecute una vez

    console.log(drinks);

    const obtenerDatos =async () => {
      //  for (let index = 1; index <700; index++) {
            const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            const users = await data.json();
            setDrinks(users);   
     //   }
    }

    return ( 
        <div>
            <h1>Nosotros</h1>
            <ul>
            </ul>
        </div>
     );
}
 
export default Nosotros;
