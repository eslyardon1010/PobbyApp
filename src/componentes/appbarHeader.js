import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet,Image } from 'react-native';

const Header = ({}) => (
    <Appbar.Header style = {styles.header}>
      <Image
          style={styles.img}
          source={require('../../assets/logo.png')}
        />
       <Appbar.Content title="Pobby's Cocktails" />
    </Appbar.Header>
);

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#000',
  },
  img:{
    marginLeft:5,
    width: 44,
  }
})
export default Header;