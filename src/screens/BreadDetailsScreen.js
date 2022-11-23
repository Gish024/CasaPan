import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const BreadDetailsScreen = () => {
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
    backgroundColor: '#22c1c3',
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