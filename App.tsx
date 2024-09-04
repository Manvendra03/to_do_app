/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateTaskScreen from './src/screens/CreateTaskScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  
  // return (<HomeScreen/>);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
              screenOptions={{ headerShown: false }}
              >
        <Stack.Screen 
           name="Home"
          component={HomeScreen}
        />
        
        <Stack.Screen
          name="CreateTask"
          component={CreateTaskScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
