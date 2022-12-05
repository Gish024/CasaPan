import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const BreadItems = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelected(item)}>
      <View style={styles.breadItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.details}> $ {item.price}</Text>
          <Text style={styles.details}>{item.weight}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BreadItems;

const styles = StyleSheet.create({
  breadItem: {
    padding: 10,
    margin: 15,
    borderRadius: 8,
    backgroundColor: '#eeaeca',
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Patrick',
    textAlign: 'center',
  },
  details: {
    fontSize: 15,
    textAlign: 'center',
  },    
});