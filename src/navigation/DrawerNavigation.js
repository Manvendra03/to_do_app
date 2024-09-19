import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import MainNavigation from './MainNavigation';
import CustomDrawer from '../components/CustomDrawer';
import AllTask from '../screens/drawerScreens/AllTask';
import Dashboard from '../screens/drawerScreens/Dashboard';
import Help from '../screens/drawerScreens/Help';
import ContactUs from '../screens/drawerScreens/ContactUs';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false, swipeEdgeWidth: 0}}
        drawerContent={props => (
           <CustomDrawer {...props}/> 
        )}>
        <Drawer.Screen name="Home" component={MainNavigation} />
        <Drawer.Screen name="All Task" component={AllTask} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
        {/* <Drawer.Screen
          name="CreateTask"
          component={CreateTaskScreen}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
