import AuthScreen from '../screens/AuthScreen';
import { COLORS } from '../constants/Colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return(
    <Stack.Navigator 
      initialRouteName='Login' 
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
      <Stack.Screen name='Login' component={AuthScreen} />                
    </Stack.Navigator>
  );
};