import React, {useState, useEffect} from 'react';
import { Image } from 'react-native';
import { Card,Text, Title } from 'react-native-paper';
import { mostrarInfo } from '../api';


const DrinkCard = ({cocktail}) =>{
  const [cocktails,  setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await mostrarInfo();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);
    return(
        <Card>
            <Card.Title title= {cocktail.name}/>
            <Card.Content>
                <Card.Cover source={{ uri: cocktail.strDrinkThumb }}  style={{height:350}} />
                <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titleStyle}>{index=cocktail.idDrink}</Text>
        <View>
          <Text style={styles.titleStyle}>{cocktail.strDrink}</Text>
           <Text style={styles.texto}>{cocktail.strCategory}</Text>
           <Text style={styles.texto}>{cocktail.strInstructions}</Text>
        </View>
          </View>
    </View>    
            </Card.Content>
        </Card>
    );
};

export default DrinkCard;