import MainNavigator from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Patrick': require('./src/assets/fonts/PatrickHand-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null
  }
  
  return( 
    <Provider store={store}>
      <MainNavigator />
    </Provider>    
  );
}


