/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import MainNavigation from './src/navigation/MainNavigation';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';


function App(): React.JSX.Element {
  


LogBox.ignoreAllLogs(); 
  // return (<HomeScreen/>);
  useEffect(()=>{
     setTimeout(()=>{
      console.log("Started !!");
      SplashScreen.hide();
     },500);
  },[]);
  return (
      <DrawerNavigation/>
      // <MainNavigation/>
  );
}

export default App;
