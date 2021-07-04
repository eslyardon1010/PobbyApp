import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const BarraDeBusqueda = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={()=> {navigation.navigate("SearchResults")}}
    />
  );
};

export default BarraDeBusqueda;