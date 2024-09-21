import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (

      <Stack.Navigator
              screenOptions={{ headerShown: false}}
              >
        <Stack.Screen 
           name="HomeScreen"
          component={HomeScreen}
        />
        
        <Stack.Screen
          name="CreateTask"
          component={CreateTaskScreen}
        />

        <Stack.Screen 
          name="TabNavigation"
          component={TabNavigation}/>
      </Stack.Navigator>
)
}

export default MainNavigation

const styles = StyleSheet.create({})