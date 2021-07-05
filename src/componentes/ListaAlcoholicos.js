import React from 'react';
import { FlatList,TouchableOpacity,Text,StyleSheet } from 'react-native';


import { GuardarId } from '../api';

const ListaAlcoholicos = ({drinks, navigation}) => {

console.log('-------------------------------------------------------');
console.log(drinks);

    return(
        <FlatList
        data = {drinks.results}
        numColumns = {'3'}
        keyExtractor = {(item) => item.name}
        renderItem={({item}) =>{
            return(
                <TouchableOpacity style={styles.touch} onPress={()=>{navigation.navigate("InfoHeroes", obtenerName({obtener:item.name}), console.log(item.id))}}>
                    <Text id ={item.strDrink}/>
                </TouchableOpacity>
            );
        }}
        />
    );

};

const styles = StyleSheet.create({
    touch:{
        backgroundColor: '#fff',
        width:'30%',
        height:200,
        margin:'1%',
        marginLeft:'2%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
            }
})

export default ListaAlcoholicos;  