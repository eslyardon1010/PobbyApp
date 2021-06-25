import * as React from 'react';
import Header from "../appbarHeader"
import { StyleSheet, View } from "react-native";
import { Searchbar } from 'react-native-paper';
import { Button } from 'react-native-paper';


const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
   const onChangeSearch = query => setSearchQuery(query);
return ( 
  <View>
        <Header/>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
    Mascotas
  </Button>
   </View> 

    );
    
}

export default Home;