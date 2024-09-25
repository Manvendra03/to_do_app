import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTask, { selectedTask, setShowTask, showTask } from '../screens/drawerScreens/tabNavigation/AllTask';
import IncompleteTask from '../screens/drawerScreens/tabNavigation/IncompleteTask';
import CompleteTask from '../screens/drawerScreens/tabNavigation/CompleteTask';
import AppBar from '../components/AppBar';
import Modal from 'react-native-modal';
import EditModel from '../components/EditModel';



const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {


  const [showTask, setShowTask] = useState(false);
  const [selectedTask,setSelectedTask] = useState({});



  return (
    <View style={{height: '100%', backgroundColor: 'white', width: '100%'}}>
      <AppBar tittle={'All Task'} />
      <Tab.Navigator 
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: '#1E368A' },  // Set the indicator color here
            tabBarActiveTintColor: '#1E368A',  // Set active text color
            tabBarInactiveTintColor: 'gray',  // Set inactive text color
            tabBarLabelStyle: { fontSize: 12 , fontWeight: "500" },  // Customize label style
            // Adjust tab bar position
          }}
        
          style={{top: -10 }} >
        <Tab.Screen name="All Task" component={AllTask}  initialParams={{setSelectedTask: setSelectedTask ,setShowTask: setShowTask}}/>
        <Tab.Screen name="Finished" component={CompleteTask} initialParams={{setSelectedTask: setSelectedTask ,setShowTask: setShowTask}}/>
        <Tab.Screen name="Pending" component={IncompleteTask} initialParams={{setSelectedTask: setSelectedTask ,setShowTask: setShowTask}}/>
      </Tab.Navigator>


      <Modal isVisible={showTask} >
          <EditModel setShowTask={setShowTask} taskobject={selectedTask}/>
      </Modal>
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
