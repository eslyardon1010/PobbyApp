import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native'
import { obtenerName } from "../api/index";
const BarraDeBusqueda = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search by name"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={()=>  { navigation.navigate("SearchResults", obtenerName({ obtener: searchQuery}))}}
      style={styles.searchBar}
    />
  );
};
const styles = StyleSheet.create({
  searchBar: {
    fontSize: 12,
    marginTop: 20 ,
    width: 300,
    height: 35,
    borderRadius: 30,
    alignContent: "center",
    alignSelf:"center",
     shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },});

export default BarraDeBusqueda;