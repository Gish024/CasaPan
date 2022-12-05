import { COLORS } from '../constants/Colors';
import CartScreen from '../screens/CartScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return(
    <Stack.Navigator 
      initialRouteName='Categories' 
      screenOptions={{ 
        headerStyle: { backgroundColor: COLORS.secondary },
        headerTintColor: '#F8BBD0',
        headerTitleStyle: {
          fontWeight: 'bold',
          justifyContent: 'center',
          fontSize: 25,
          textAlign: 'center',                    
        },
      }}
    >
    <Stack.Screen 
      name='Cart'
      component={CartScreen}
      options={{title: 'Carrito' }}
    />
                
    </Stack.Navigator>
  );
};