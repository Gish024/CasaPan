import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';

const BreadDetailsScreen = () => {
  const bread = useSelector((state) => state.bread.selected)

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bread Detail</Text>
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
  },
  title: {
    fontFamily: 'Patrick',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 20, 
  },
});