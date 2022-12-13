import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { filteredBread, selectBread } from '../store/actions/bread.action';

import BreadItems from '../components/BreadItems';
import { FlatList } from 'react-native';

const CategoryBreadScreen = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  const categoryBreads = useSelector((state) => state.breads.filteredBread);

  useEffect(() => {
    dispatch(filteredBread(category.id));
  }, []);
  
    const handleSelectedCategory = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('Details', {      
      name: item.name,
    });
  };

  /*const breads = BREADS.filter(
    (bread) => bread.category === route.params.categoryID
  );*/


  const renderBreadItem = ({ item }) => (
    <BreadItems item={item} onSelected={handleSelectedCategory}/>
  );

  return (
    <FlatList 
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  );
};

export default connect()(CategoryBreadScreen);

