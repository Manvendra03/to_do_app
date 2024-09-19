import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTask from '../screens/drawerScreens/tabNavigation/AllTask';
import IncompleteTask from '../screens/drawerScreens/tabNavigation/IncompleteTask';
import CompleteTask from '../screens/drawerScreens/tabNavigation/CompleteTask';
import AppBar from '../components/AppBar';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <View style={{height: '100%', backgroundColor: 'white', width: '100%'}}>
      <AppBar tittle={'All Tasks'} />
      <Tab.Navigator style={{top: -10}}>
        <Tab.Screen name="All Task" component={AllTask} />
        <Tab.Screen name="Finished" component={CompleteTask} />
        <Tab.Screen name="Pending" component={IncompleteTask} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
