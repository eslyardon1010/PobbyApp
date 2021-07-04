import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet} from 'react-native'
const BarraDeBusqueda = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={()=> {navigation.navigate("SearchResults")}}
      style={styles.searchBar}
    />
  );
};
const styles = StyleSheet.create({
  searchBar: {
    marginTop: 20 ,
    width: 300,
    height: 35,
    borderRadius: 30,
    marginLeft: 32, 
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