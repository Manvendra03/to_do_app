/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import MainNavigation from './src/navigation/MainNavigation';


function App(): React.JSX.Element {
  
  // return (<HomeScreen/>);
  
  return (
      <DrawerNavigation/>
      // <MainNavigation/>
  );
}

export default App;
