/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, {createContext, useEffect, useState} from 'react';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import MainNavigation from './src/navigation/MainNavigation';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from 'react-native';
import IncompleteTask from './src/screens/drawerScreens/tabNavigation/IncompleteTask';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BaseContext = createContext({
  // completedTaskList: [{}],
  // incompletedTaskList: [{}],
});


function App() {
  LogBox.ignoreAllLogs();
  
  // storeData('MontyDonnnnn');
  

  const [completedTaskList, setCompletedTaskList] = useState(
    //   [
    //   {
    //     tittle: 'Monty',
    //     category: 'Work',
    //     date: '24 September 2024 , Tuesday',
    //     startTime: '3:34 PM',
    //     endTime: '5:45 PM',
    //     description: 'This is description for other tasks',
    //     isCompleted: true,
    //   },
    //   {
    //     tittle: 'rent Car',
    //     description: 'This is renting car and i want to rent car ',
    //     category: 'Work',
    //     date: '27 September 2024 , Tuesday',
    //     startTime: '3:34 PM',
    //     endTime: '5:45 PM',
    //     isCompleted: true,
    //   },
    //   {
    //     tittle: 'App Development',
    //     description: 'This is app dev with react-native ',
    //     category: 'Work',
    //     date: '27 October 2024 , Tuesday',
    //     startTime: '1:34 PM',
    //     endTime: '5:45 PM',
    //     isCompleted: true,
    //   },
    //   {
    //     tittle: 'stock Market Revision ',
    //     description: 'Option trading gain only profit hacker boltey',
    //     category: 'Education',
    //     date: '31 December 2024 , Tuesday',
    //     startTime: '1:45 PM',
    //     endTime: '2:55 PM',
    //     isCompleted: true,
    //   },
    // ]

    [
      {
        alarmTime: '9 : 22 PM',
        category: 'Appointment',
        date: '25 October 2024 , Friday',
        description: '',
        id: '1729871552659-2500',
        isAlarm: false,
        isCompleted: true,
        startTime: '9 : 22 PM',
        tittle: 'task3',
      },
      {
        alarmTime: '9 : 22 PM',
        category: 'Shopping',
        date: '25 October 2024 , Friday',
        description: '',
        id: '1729871543543-84600',
        isAlarm: false,
        isCompleted: true,
        startTime: '9 : 22 PM',
        tittle: 'task2',
      },
      {
        alarmTime: '9 : 22 PM',
        category: 'Education',
        date: '25 October 2024 , Friday',
        description: '',
        id: '1729871533225-6544',
        isAlarm: false,
        isCompleted: true,
        startTime: '9 : 22 PM',
        tittle: 'task1',
      },
    ],
  );
  const [incompletedTaskList, setIncompletedTaskList] = useState(
    //    [
    //   {
    //     // icon: require('../assets/task_Icons/eat.png'),
    //     tittle: 'Manvendra',
    //     category: 'Work',
    //     date: '24 September 2024 , Tuesday',
    //     startTime: '3:34 PM',
    //     endTime: '5:45 PM',
    //     description: 'This is description for other tasks',
    //     isCompleted: false,
    //   },
    //   {
    //     // icon: require('../../../assets/task_Icons/other.png'),
    //     tittle: 'rent Car',
    //     description: 'This is renting car and i want to rent car ',
    //     category: 'Work',
    //     date: '27 September 2024 , Tuesday',
    //     startTime: '3:34 PM',
    //     endTime: '5:45 PM',
    //     isCompleted: false,
    //   },
    //   {
    //     // icon: require('../../../assets/task_Icons/eat.png'),
    //     tittle: 'App Development',
    //     description: 'This is app dev with react-native ',
    //     category: 'Other',
    //     date: '27 October 2024 , Tuesday',
    //     startTime: '1:34 PM',
    //     endTime: '5:45 PM',
    //     isCompleted: false,
    //   },
    //   // {
    //   //   // icon: require('../../../assets/task_Icons/book.png'),
    //   //   tittle: 'stock Market Revision ',
    //   //   description: 'Option trading gain only profit hacker boltey',
    //   //   category: 'Education',
    //   //   date: '31 December 2024 , Tuesday',
    //   //   startTime: '1:45 PM',
    //   //   endTime: '2:55 PM',
    //   //   isCompleted: false,
    //   // },
    //   // {
    //   //   // icon: require('../../../assets/task_Icons/cart.png'),
    //   //   tittle: 'Shopping',
    //   //   description: 'grocessarys',
    //   //   category: 'Shopping',
    //   //   date: '29 September 2024 , Tuesday',
    //   //   startTime: '4:34 PM',
    //   //   endTime: '7:45 PM',
    //   //   isCompleted: false,
    //   // },
    //   // {
    //   //   // icon: require('../../../assets/task_Icons/eat.png'),
    //   //   tittle: 'Eatting',
    //   //   description: '',
    //   //   category: 'Meal',
    //   //   date: '24 September 2024 , Tuesday',
    //   //   startTime: '3:34 PM',
    //   //   endTime: '5:45 PM',
    //   //   isCompleted: false,
    //   // },
    //   // {
    //   //   // icon: require('../../../assets/task_Icons/eat.png'),
    //   //   tittle: 'UI Design',
    //   //   description: '',
    //   //   category: 'Work',
    //   //   date: '24 September 2024 , Tuesday',
    //   //   startTime: '3:34 PM',
    //   //   endTime: '5:45 PM',
    //   //   isCompleted: false,
    //   // },
    //   // {
    //   //   // icon: require('../../../assets/task_Icons/meet.png'),
    //   //   tittle: 'Out with friends',
    //   //   description: '',
    //   //   category: 'Social',
    //   //   date: '24 September 2024 , Tuesday',
    //   //   startTime: '3:34 PM',
    //   //   endTime: '5:45 PM',
    //   //   isCompleted: false,
    //   // },
    // ],
    [
      {
        alarmTime: '9 : 22 PM',
        category: 'Appointment',
        date: '25 October 2024 , Friday',
        description: '',
        id: '1729871552659-250',
        isAlarm: false,
        isCompleted: false,
        startTime: '9 : 22 PM',
        tittle: 'task3',
      },
      {
        alarmTime: '9 : 22 PM',
        category: 'Shopping',
        date: '25 October 2024 , Friday',
        description: '',
        id: '1729871543543-8460',
        isAlarm: false,
        isCompleted: false,
        startTime: '9 : 22 PM',
        tittle: 'task2',
      },
      {
        alarmTime: '9 : 22 PM',
        category: 'Education',
        date: '25 October 2024 , Friday',
        description: '',
        id: '1729871533225-654',
        isAlarm: false,
        isCompleted: false,
        startTime: '9 : 22 PM',
        tittle: 'task1',
      },
    ],
  );



  function addTask(newTask) {
    //  console.log(" ----- " ,newTask);
    //  var temp = incompletedTaskList.push(newTask);
    const temp = [newTask, ...incompletedTaskList];
    console.log(temp);

    setIncompletedTaskList(temp);
  }

  function editTask(index, modifiedTask) {
    // Create a new array with the modified task at the specified index
    const updatedTaskList = [
      ...incompletedTaskList.slice(0, index),
      modifiedTask,
      ...incompletedTaskList.slice(index + 1),
    ];

    // Update the state with the new array
    setIncompletedTaskList(updatedTaskList);
    console.log("--->>>",updatedTaskList);
  }

  function markAsIncomplete(index, task) {
    console.log('------->>>>>', task);

    
    const updatedCompleteTaskList = completedTaskList.filter(item => {
      console.log('Checking item:', item);
      console.log('task task task ', task); // Log each element being checked
      return item.id !== task.id;
    });

    // array.filter(item => item !== myObj);
    setCompletedTaskList(updatedCompleteTaskList);

    task.isCompleted = false;
    const updatedInCompleteTaskList = [task, ...incompletedTaskList];
    setIncompletedTaskList(updatedInCompleteTaskList);

    console.log('******* complete length app ', completedTaskList.length);
    console.log(
      '*******____ incomplete length app ',
      incompletedTaskList,
    );
  }

  function markAsComplete(task)
  {

    const updatedInCompleteTaskList = incompletedTaskList.filter(item => {
      return item.id !== task.id;
    });
    setIncompletedTaskList(updatedInCompleteTaskList);
    
    task.isCompleted = true;
    const updatedCompleteTaskList = [task, ...completedTaskList];
    setCompletedTaskList(updatedCompleteTaskList);


  }

  function removeTask(task)
  {
    const updatedInCompleteTaskList = incompletedTaskList.filter(item => {
      return item.id !== task.id;
    });
    setIncompletedTaskList(updatedInCompleteTaskList);
  }

  // return (<HomeScreen/>);
  useEffect(() => {
    setTimeout(() => {
      console.log('Started !!');
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <BaseContext.Provider
      value={{
        completedTaskList,
        incompletedTaskList,
        addTask,
        editTask,
        markAsIncomplete,
        markAsComplete,
        removeTask
      }}>
      <DrawerNavigation />
    </BaseContext.Provider>
    // <MainNavigation/>
  );
}

export default App;
