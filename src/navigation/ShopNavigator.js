import BreadDetailsScreen from '../screens/BreadDetailsScreen';
import { COLORS } from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
  return(
    <Stack.Navigator 
      initialRouteName='Categories' 
      screenOptions={{ 
        headerStyle: { backgroundColor: COLORS.secondary },
        headerTintColor: '#F8BBD0',
        headerTitleStyle: {
          fontWeight: 'bold',
          justifyContent: 'center',
          fontSize: 30,
          textAlign: 'center',                       
        }
        
      }}>
      <Stack.Screen  
        name="Categories" 
        component={CategoriesScreen} 
        options={{
          title: 'CasaPan',                   
        }}                    
      />
      <Stack.Screen 
        name="Bread" 
        component={CategoryBreadScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen 
        name="Details" component={BreadDetailsScreen} 
        options={({ route }) => ({
          title: route.params.name,
        })} 
      />
    </Stack.Navigator>
  );
};