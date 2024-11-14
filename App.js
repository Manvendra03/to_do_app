import 'react-native-gesture-handler';
import React, {createContext, useEffect, useState} from 'react';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import MainNavigation from './src/navigation/MainNavigation';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from 'react-native';
import IncompleteTask from './src/screens/drawerScreens/tabNavigation/IncompleteTask';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fetchData,
  getData,
  incompleteList,
  saveData,
  setData,
} from './src/Functions/databaseFunctions';
import {getDrawerStatusFromState} from '@react-navigation/drawer';
import LoginScreen from './src/screens/LoginScreen';

export const BaseContext = createContext({
  completedTaskList: [],
  incompletedTaskList: [],
});

function App() {
  LogBox.ignoreAllLogs();

  const [loading, setLoading] = useState(true); // Initially, the app is loading

  const [dashboardPendingDataList, setDashboardPendingDataList] = useState([]);
  const [dashboardCompleteDataList, setDashboardCompleteDataList] = useState(
    [],
  );
  const [user, setUser] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  const [incompletedTaskList, setIncompletedTaskList] = useState([]);

  async function addTask(newTask) {
    const temp = [newTask, ...incompletedTaskList];

    console.log('HHHHHHHHHHHHH', temp.length);

    if (saveData('incompleteTaskList', temp)) {
      console.log('sSaved to DBMS');
      setIncompletedTaskList(temp);
    } else {
      console.log('try Later Dont able to operate ...!');
    }
  }

  function editTask(index, modifiedTask) {
    // Create a new array with the modified task at the specified index
    const updatedTaskList = [
      ...incompletedTaskList.slice(0, index),
      modifiedTask,
      ...incompletedTaskList.slice(index + 1),
    ];

    if (saveData('incompleteTaskList', updatedTaskList)) {
      console.log('sSaved to DBMS');
      setIncompletedTaskList(updatedTaskList);
      console.log('--->>>', updatedTaskList);
    } else {
      console.log('try Later Dont able to operate ...!');
    }
  }

  function markAsIncomplete(index, task) {
    console.log('------->>>>>', task);

    const updatedCompleteTaskList = completedTaskList.filter(item => {
      console.log('Checking item:', item);
      console.log('task task task ', task); // Log each element being checked
      return item.id !== task.id;
    });

    // array.filter(item => item !== myObj);

    if (saveData('completeTaskList', updatedCompleteTaskList)) {
      console.log('sSaved to DBMS');
      setCompletedTaskList(updatedCompleteTaskList);
    } else {
      console.log('try Later Dont able to operate ...!');
    }

    task.isCompleted = false;
    const updatedInCompleteTaskList = [task, ...incompletedTaskList];

    if (saveData('incompleteTaskList', updatedInCompleteTaskList)) {
      console.log('sSaved to DBMS');
      setIncompletedTaskList(updatedInCompleteTaskList);
    } else {
      console.log('try Later Dont able to operate ...!');
    }

    console.log('******* complete length app ', completedTaskList.length);
    console.log('*******____ incomplete length app ', incompletedTaskList);
  }

  function markAsComplete(task) {
    const updatedInCompleteTaskList = incompletedTaskList.filter(item => {
      return item.id !== task.id;
    });

    // setIncompletedTaskList(updatedInCompleteTaskList);
    if (saveData('incompleteTaskList', updatedInCompleteTaskList)) {
      console.log('sSaved to DBMS');
      setIncompletedTaskList(updatedInCompleteTaskList);
    } else {
      console.log('try Later Dont able to operate ...!');
    }

    task.isCompleted = true;
    const updatedCompleteTaskList = [task, ...completedTaskList];
    // setCompletedTaskList(updatedCompleteTaskList);

    if (saveData('completeTaskList', updatedCompleteTaskList)) {
      console.log('sSaved to DBMS');
      setCompletedTaskList(updatedCompleteTaskList);
    } else {
      console.log('try Later Dont able to operate ...!');
    }
  }

  function removeTask(task) {
    const updatedInCompleteTaskList = incompletedTaskList.filter(item => {
      return item.id !== task.id;
    });

    if (saveData('incompleteTaskList', updatedInCompleteTaskList)) {
      console.log('sSaved to DBMS');
      setIncompletedTaskList(updatedInCompleteTaskList);
    } else {
      console.log('try Later Dont able to operate ...!');
    }
  }

  async function fetchIncompleteTaskList() {
    try {
      const comp = await fetchData('incompleteTaskList'); // Assuming fetchData returns a promise
      if (comp) {
        setIncompletedTaskList(comp); // Set the fetched data into state
      } else {
        console.log('Unable to fetch comp data, it is null');
      }
    } catch (error) {
      console.error('Error fetching data from AsyncStorage:', error);
    }
  }

  async function fetchCompleteTaskList() {
    try {
      const comp = await fetchData('completeTaskList'); // Assuming fetchData returns a promise
      if (comp) {
        setCompletedTaskList(comp); // Set the fetched data into state
      } else {
        console.log('Unable to fetch comp data, it is null');
      }
    } catch (error) {
      console.error('Error fetching data from AsyncStorage:', error);
    }
  }

  async function checkUser() {
    try {
      const comp = await fetchData('UserData'); // Assuming fetchData returns a promise

      if (comp) {
        console.log('===== There is data =====', comp);
        setIsUser(true);
        setUser(comp);

        // Set the fetched data into state
      } else {
        console.log('No user found');
        // saveData('DashboardPendingData',[20,20,20,20,20,20,20]);
      }
    } catch (error) {
      console.error('Error fetching data from AsyncStorage:', error);
    }
  }

  async function setDashboardData() {
    // Pending.....!
    try {
      const comp = await fetchData('DashboardPendingData'); // Assuming fetchData returns a promise

      if (comp) {
        console.log('===== There is data =====', comp); // Set the fetched data into state
        setDashboardPendingDataList(comp);
      } else {
        console.log('Unable to fetch comp data, it is null ==');
        saveData('DashboardPendingData', [20, 20, 20, 20, 20, 20, 20]);
      }
    } catch (error) {
      console.error('Error fetching data from AsyncStorage:', error);
    }

    //  Completed Task

    try {
      const comp = await fetchData('DashboardCompletedData'); // Assuming fetchData returns a promise

      if (comp) {
        console.log('===== There is data =====', comp); // Set the fetched data into state
        setDashboardCompleteDataList(comp);
      } else {
        console.log('Unable to fetch comp data, it is null ==');
        saveData('DashboardCompletedData', [50, 50, 50, 50, 20, 20, 20]);
      }
    } catch (error) {
      console.error('Error fetching data from AsyncStorage:', error);
    }
  }

  useEffect(() => {
    // // await getData(incompleteList);
    // checkUser();
    // fetchIncompleteTaskList();
    // fetchCompleteTaskList();

    // //  Temporary Code for setting Dashboard Data
    // setDashboardData();


    const loadData = async () => {
      await checkUser();
      await fetchIncompleteTaskList();
      await fetchCompleteTaskList();
      await setDashboardData();

      // Hide splash screen once data is loaded
      setLoading(false);
    };

    loadData();

    setTimeout(() => {
      if (!loading) SplashScreen.hide();
    }, 1000); 

  }, [loading]);

  if (isUser === null) return null;

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
      <DrawerNavigation inital={isUser ? 'Home' : 'Login'} />
      {/* <LoginScreen/> */}
    </BaseContext.Provider>
    // <MainNavigation/>
  );
}

export default App;
