import { Button, StyleSheet, Text, View } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';

import React from 'react';
import {addItem} from '../store/actions/cart.action'

const BreadDetailsScreen = () => {
  const dispatch = useDispatch();

  const bread = useSelector((state) => state.breads.selected);

  const handleAddItemCart = () => {
   dispatch(addItem(bread));
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.screen}> 
        <Text style={styles.title}>{bread.name}</Text>
        <Text style={styles.description}>{bread.description}</Text>
        <Text style={styles.price}>$ {bread.price}</Text>
        <View style={styles.button}>
          <Button title='Agregar al carrito' onPress={handleAddItemCart} />
        </View>
      </View>
    </View>
  );
};

export default BreadDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffefba',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  screen: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: 40,
    fontFamily: 'Patrick',
  },
  button: {
    marginTop: 15,
  },
});