
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import HomeScreen from './src/screen/HomeScreen';
import FruitListScreen from './src/screen/FruitListScreen';
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  FruitListScreen: { screen: FruitListScreen },
},

     { 
       initialRouteName: 'HomeScreen'
     }

);
const App = createAppContainer(AppNavigator);
export default App;