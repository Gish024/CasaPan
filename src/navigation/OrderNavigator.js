import { COLORS } from '../constants/Colors';
import OrdersScreen from '../screens/OrdersScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default OrderNavigator = () => {
  return(
    <Stack.Navigator 
      initialRouteName='Orders' 
      screenOptions={{ 
        headerStyle: { backgroundColor: COLORS.secondary },
        headerTintColor: '#F8BBD0',
        headerTitleStyle: {
          fontWeight: 'bold',
          justifyContent: 'center',
          fontSize: 30,
          textAlign: 'center',                       
        },        
      }}
    >
      <Stack.Screen  
        name="Orders" 
        component={OrdersScreen} 
        options={{
          title: 'Ordenes',                   
        }}                    
      />
    </Stack.Navigator>
  );
};