import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import MainNavigation from './MainNavigation';
import CustomDrawer from '../components/CustomDrawer';
import AllTask from '../screens/drawerScreens/tabNavigation/AllTask';
import Dashboard from '../screens/drawerScreens/Dashboard';
import Notification from '../screens/drawerScreens/Notification';
import ContactUs from '../screens/drawerScreens/ContactUs';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/LoginScreen';
import { BaseContext } from '../../App';

const Drawer = createDrawerNavigator();

const DrawerNavigation = (inital) => {
  const {completedTaskList,incompletedTaskList,user,isUser} = useContext(BaseContext);
  const [key,setKey] = useState(0); 
  console.log("Inital PRarm",inital);

  // const [isUser,setIsUser] = useState(false);
 
  useEffect(()=>{
    if(isUser)
    {
      setKey(key+1);
      console.log("User Exist ",user);
    }

    console.log(isUser);
    
  },[isUser])
  return (
    <NavigationContainer key={key}>
      <Drawer.Navigator
         initialRouteName= {inital.initial}
        screenOptions={{headerShown: false, swipeEdgeWidth: 0}}
        drawerContent={props => (
           <CustomDrawer {...props}/> 
        )}>
        
        <Drawer.Screen name='Login' component={LoginScreen}/>
        <Drawer.Screen name="Home" component={MainNavigation} />
        <Drawer.Screen name="Task Overview" component={TabNavigation} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Notification" component={Notification} />
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
