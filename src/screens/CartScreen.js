import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CART } from '../data/Cart';
import CartItem from '../components/CartItem';
import React from 'react';

const CartScreen = () => {
  const items = CART;  
  const total = 120;

  const handleConfirmedCart = () => {
    console.log('Confirmar carrito');
  }

  const handleDeleteItem = () => {
    console.log('Eliminar item');
  }

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.lista}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
         />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm}>
          <Text style={styles.text}>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total: $</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#FFFDF6',
    paddingBottom: 120,
  },
  lista: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#fff',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor:'#D38CAD', 
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});