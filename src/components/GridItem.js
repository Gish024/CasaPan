import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const GridItem = ({item, onSelected }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity style={{...styles.container, backgroundColor: item.color }}
      onPress={() => onSelected(item)}
      >
        <Image style={styles.imagen} source={require('../assets/img/panSaborizado.jpg')} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 8,
    margin: 25,
    height: 200,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontFamily: 'Patrick',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  imagen: {
    width: '90%',
    height: '80%',
    marginTop: 10,
    marginBottom: 5,
  },
});