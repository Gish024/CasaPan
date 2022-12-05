import { BREADS } from '../data/Bread';
import BreadItems from '../components/BreadItems';
import { FlatList } from 'react-native';
import React from 'react';

const CategoryBreadScreen = ({ navigation, route }) => {

  const breads = BREADS.filter(
    (bread) => bread.category === route.params.categoryID
    );

  const handleSelectedCategory = (item) => {
    navigation.navigate('Details', {
      productID: item.id,
      name: item.name,
    });
  };


  const renderBreadItem = ({ item }) => (
    <BreadItems item={item} onSelected={handleSelectedCategory}/>
  );

  return (
    <FlatList 
      data={breads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
      numColumns={1}
    />
  );
};

export default CategoryBreadScreen;

