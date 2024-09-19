import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (

      <Stack.Navigator
              screenOptions={{ headerShown: false}}
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
)
}

export default MainNavigation

const styles = StyleSheet.create({})