// import {createStackNavigator} from 'react-navigation-stack'
// import SearchScreen from './src/screens/SearchScreen';


// const navigator = createStackNavigator({
//   Search:SearchScreen
// },{

// initialRouteName:'Search',
// defaultNavigationOptions:{
//   title:'Buisness Search'
// }


// });


// export default createAppContainer(navigator)







// In App.js in a new project

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;