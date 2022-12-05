import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Patrick': require('./src/assets/fonts/PatrickHand-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null
  }
  
  return <BottomTabNavigator />;
}


