import 'react-native-gesture-handler';
import React, {createContext, useEffect, useState} from 'react';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchData, saveData} from './src/Functions/databaseFunctions';

export const BaseContext = createContext({
  completedTaskList: [],
  incompletedTaskList: [],
});

function App() {
  LogBox.ignoreAllLogs();

  // State to manage loading
  const [loading, setLoading] = useState(true); // Initially, the app is loading

  const [dashboardPendingDataList, setDashboardPendingDataList] = useState([]);
  const [dashboardCompleteDataList, setDashboardCompleteDataList] = useState(
    [],
  );
  const [user, setUser] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  const [incompletedTaskList, setIncompletedTaskList] = useState([]);

  const addTask = async newTask => {
    const temp = [newTask, ...incompletedTaskList];
    if (await saveData('incompleteTaskList', temp)) {
      console.log('Saved to DBMS');
      setIncompletedTaskList(temp);
    } else {
      console.log("Try later, couldn't operate...");
    }
  };

  const editTask = async (index, modifiedTask) => {
    const updatedTaskList = [
      ...incompletedTaskList.slice(0, index),
      modifiedTask,
      ...incompletedTaskList.slice(index + 1),
    ];
    if (await saveData('incompleteTaskList', updatedTaskList)) {
      console.log('Saved to DBMS');
      setIncompletedTaskList(updatedTaskList);
    } else {
      console.log("Try later, couldn't operate...");
    }
  };

  const markAsIncomplete = async task => {
    const updatedCompleteTaskList = completedTaskList.filter(
      item => item.id !== task.id,
    );
    if (await saveData('completeTaskList', updatedCompleteTaskList)) {
      console.log('Saved to DBMS');
      setCompletedTaskList(updatedCompleteTaskList);
    } else {
      console.log("Try later, couldn't operate...");
    }

    task.isCompleted = false;
    const updatedInCompleteTaskList = [task, ...incompletedTaskList];
    if (await saveData('incompleteTaskList', updatedInCompleteTaskList)) {
      console.log('Saved to DBMS');
      setIncompletedTaskList(updatedInCompleteTaskList);
    } else {
      console.log("Try later, couldn't operate...");
    }
  };

  const markAsComplete = async task => {
    const updatedInCompleteTaskList = incompletedTaskList.filter(
      item => item.id !== task.id,
    );
    if (await saveData('incompleteTaskList', updatedInCompleteTaskList)) {
      console.log('Saved to DBMS');
      setIncompletedTaskList(updatedInCompleteTaskList);
    } else {
      console.log("Try later, couldn't operate...");
    }

    task.isCompleted = true;
    const updatedCompleteTaskList = [task, ...completedTaskList];
    if (await saveData('completeTaskList', updatedCompleteTaskList)) {
      console.log('Saved to DBMS');
      setCompletedTaskList(updatedCompleteTaskList);
    } else {
      console.log("Try later, couldn't operate...");
    }
  };

  const removeTask = async task => {
    const updatedInCompleteTaskList = incompletedTaskList.filter(
      item => item.id !== task.id,
    );
    if (await saveData('incompleteTaskList', updatedInCompleteTaskList)) {
      console.log('Saved to DBMS');
      setIncompletedTaskList(updatedInCompleteTaskList);
    } else {
      console.log("Try later, couldn't operate...");
    }
  };

  // Function to fetch incomplete task list
  const fetchIncompleteTaskList = async () => {
    try {
      const comp = await fetchData('incompleteTaskList');
      if (comp) {
        setIncompletedTaskList(comp);
      } else {
        console.log('Unable to fetch incomplete tasks');
      }
    } catch (error) {
      console.error('Error fetching incomplete tasks:', error);
    }
  };

  // Function to fetch complete task list
  const fetchCompleteTaskList = async () => {
    try {
      const comp = await fetchData('completeTaskList');
      if (comp) {
        setCompletedTaskList(comp);
      } else {
        console.log('Unable to fetch completed tasks');
      }
    } catch (error) {
      console.error('Error fetching completed tasks:', error);
    }
  };

  // Function to check user
  const checkUser = async () => {
    try {
      const comp = await fetchData('UserData');
      if (comp) {
        console.log('User data found:', comp);
        setIsUser(true);
        setUser(comp);
      } else {
        console.log('No user found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Function to set dashboard data
  const setDashboardData = async () => {
    try {
      const pendingData = await fetchData('DashboardPendingData');
      if (pendingData) {
        setDashboardPendingDataList(pendingData);
      } else {
        console.log('Unable to fetch pending data');
        saveData('DashboardPendingData', [20, 20, 20, 20, 20, 20, 20]);
      }
    } catch (error) {
      console.error('Error fetching pending data:', error);
    }

    try {
      const completedData = await fetchData('DashboardCompletedData');
      if (completedData) {
        setDashboardCompleteDataList(completedData);
      } else {
        console.log('Unable to fetch completed data');
        saveData('DashboardCompletedData', [50, 50, 50, 50, 20, 20, 20]);
      }
    } catch (error) {
      console.error('Error fetching completed data:', error);
    }
  };

  // Effect to load data on app start
  useEffect(() => {
    const loadData = async () => {
      await checkUser();
      await fetchIncompleteTaskList();
      await fetchCompleteTaskList();
      await setDashboardData();

      // Hide splash screen once data is loaded
      setLoading(false);
    };

    loadData();

    // Simulate some delay for splash screen
    setTimeout(() => {
      if (!loading) SplashScreen.hide();
    }, 1000); // Keep splash screen visible for 1 second
  }, [loading]);

  if (loading) return null; // Prevent rendering the app before data is ready

  return (
    <BaseContext.Provider
      value={{
        completedTaskList,
        incompletedTaskList,
        dashboardPendingDataList,
        dashboardCompleteDataList,
        user,
        isUser,
        setUser,
        addTask,
        editTask,
        markAsIncomplete,
        markAsComplete,
        removeTask,
      }}>
      <DrawerNavigation initial={isUser ? 'Home' : 'Login'} />
    </BaseContext.Provider>
  );
}

export default App;
