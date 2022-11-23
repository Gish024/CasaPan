import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Categories </Text>
      <Button title="Go to Bread" onPress={() => navigation.navigate("Bread")} />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcb045',
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