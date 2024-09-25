import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {app_name, color_combination} from '../constants';

import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import TimeSelector from '../components/TimeSelector';
import TabNavigation from '../navigation/TabNavigation';
import EditModel from '../components/EditModel';
import { getImageWithCategory } from '../Functions/taskLogoSelector';
import TaskCard from '../components/TaskCard';

const HomeScreen = ({navigation}) => {
  const [selectedTask , setSelectedTask] = useState({});


  const taskData = [
    {
      icon: require('../assets/task_Icons/brush.png'),
      tittle: 'UI Design',
      category: "Design",
      date: "24 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      description: 'This is description for other tasks',
      isCompleted: false,
    },
    {
      icon: require('../assets/task_Icons/other.png'),
      tittle: 'rent Car',
      description: 'This is renting car and i want to rent car ',
      category: "Business",
      date: "27 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../assets/task_Icons/brush.png'),
      tittle: 'App Development',
      description: 'This is app dev with react-native ',
       category: "Development",
      date: "27 October 2024 , Tuesday",
      startTime: "1:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../assets/task_Icons/book.png'),
      tittle: 'stock Market Revision ',
      description: 'Option trading gain only profit hacker boltey',
       category: "Learning",
      date: "31 December 2024 , Tuesday",
      startTime: "1:45 PM",
      endTime: "2:55 PM",
      isCompleted: false,
    },
    {
      icon: require('../assets/task_Icons/cart.png'),
      tittle: 'Shopping',
      description: 'grocessarys',
       category: "Other",
      date: "29 September 2024 , Tuesday",
      startTime: "4:34 PM",
      endTime: "7:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../assets/task_Icons/eat.png'),
      tittle: 'Eatting',
      description: '',
       category: "Design",
      date: "24 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../assets/task_Icons/brush.png'),
      tittle: 'UI Design',
      description: '',
       category: "Design",
      date: "24 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../assets/task_Icons/meet.png'),
      tittle: 'Out with friends',
      description: '',
       category: "Design",
      date: "24 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
  ];
  const renderTasks = ({index, item}) => {
    // console.log("item : ",item);
    // return (
    //   <View
    //     style={{
    //       height: 85,
    //       width: '90%',
    //       alignSelf: 'center',
    //       borderRadius: 15,
    //       backgroundColor: '#ffffff',
    //       marginTop: 20,
    //       flexDirection: 'row',
    //       paddingHorizontal: 15,
    //       alignItems: 'center',
    //     }}>
    //     <View
    //       style={{
    //         height: 60,
    //         width: 60,
    //         backgroundColor: color_combination[index % 4].primary,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         borderRadius: 10,
    //       }}>
    //       <Image
    //         source={getImageWithCategory(item.category)}
    //         style={{
    //           height: 30,
    //           width: 30,
    //           tintColor: color_combination[index % 4].secoundary,
    //         }}></Image>
    //     </View>
    //     <View
    //       style={{
    //         paddingLeft: 16,
    //         justifyContent: 'space-evenly',
    //         height: '70%',
    //       }}>
    //       <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
    //         {item.tittle}
    //       </Text>
    //       <Text style={{fontSize: 13, fontWeight: '600', color: '#bababa'}}>
    //         09:00 AM - 11:00 AM
    //       </Text>
    //     </View>
    //     <TouchableOpacity
    //       style={{position: 'absolute', right: 10}}
    //       onPress={() => {
    //         setSelectedTask(item);
    //         setShowTask(true);
    //       }}>
    //       <Image
    //         source={require('../assets/arrow_icon.png')}
    //         style={{tintColor: '#bababa', height: 25, width: 25}}
    //       />
    //     </TouchableOpacity>
    //   </View>
    // );
    // console.log('------------------------------>>',index);
    return <TaskCard index= {index} item = {item} showTask={showTask} setShowTask={setShowTask} setSelectedTask={setSelectedTask}/>
  };

  const [showTask, setShowTask] = useState(false);

  return (
    <SafeAreaView
      //  #ECF4FD
      style={{height: '100%', width: '100%', backgroundColor: '#ECF4FD'}}>
      {/* style={{height: '100%', width: '100%', backgroundColor: '#F6F6F6'}}> */}
      <View style={styles.appBarStyle}>
        <TouchableOpacity
          style={{marginRight: 20, marginLeft: 5}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={require('../assets/menus.png')}
            style={{height: 30, width: 25}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 22, fontWeight: '700', color: 'black'}}>
          {' '}
          {app_name}
        </Text>
        {/* <TouchableOpacity
          style={{
            height: 45,
            width: 45,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#003685',
          }}
          
          onPress={()=>{ navigation.openDrawer()}}
          
          >
          <Text style={{fontSize: 24, fontWeight: '700', color: 'white'}}>
            M
          </Text>
        </TouchableOpacity> */}
      </View>

      {/* Offer Card */}
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={['#4CC0EE', '#1464C7']}
        style={{
          height: 180,
          paddingTop: 25,
          paddingHorizontal: 20,
          width: '93%',
          backgroundColor: 'red',
          alignSelf: 'center',
          justifyContent: 'flex-start',
          borderRadius: 20,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
          Today's progress summery
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 5,
            fontWeight: '400',
            color: 'white',
          }}>
          15 Tasks
        </Text>

        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 30,
            width: '100%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 30,
                backgroundColor: '#003685',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/task_Icons/business.png')}
                style={{height: 23, width: 23}}
              />
            </View>
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 30,
                backgroundColor: '#C3DBF9',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: 25,
              }}>
              <Image
                source={require('../assets/task_Icons/cart.png')}
                style={{height: 21, width: 21, tintColor: '#003685'}}
              />
            </View>
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 30,
                backgroundColor: '#A171BE',
                position: 'absolute',

                justifyContent: 'center',
                alignItems: 'center',
                left: 50,
              }}>
              <Image
                source={require('../assets/task_Icons/eat.png')}
                style={{height: 20, width: 20, tintColor: 'white'}}
              />
            </View>
            <View
              style={{
                height: 45,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                backgroundColor: '#E5C2F4',
                position: 'absolute',
                left: 75,
              }}>
              <Image
                source={require('../assets/plus_icon.png')}
                style={{height: 22, width: 22, tintColor: 'black'}}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
              }}>
              <Text style={{color: 'white', fontWeight: '400'}}>Progress</Text>
              <Text style={{color: 'white', fontWeight: '500'}}> 60%</Text>
            </View>
            <Progress.Bar
              progress={0.9}
              width={180}
              style={{backgroundColor: '#f6f6f6', borderColor: '#f6f6f6'}}
            />
          </View>
        </View>
      </LinearGradient>

      {/* Row Today's Task  */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          marginBottom: 5,
          alignSelf: 'center',
          paddingTop: 30,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
          Today's Task
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TabNavigation');
          }}>
          <Text style={{color: 'grey'}}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <View style={{flex: 1}}>
        <FlatList
          // data={[1, 2, 3, 4, 56, 7, 2, 3, 4, 56, 7]}

          data={taskData}
          renderItem={renderTasks}
          ListFooterComponent={<View style={{height: 60}} />}
        />
      </View>

      {/* Add Button */}
      <TouchableOpacity
        style={{
          height: 60,
          width: 60,
          borderRadius: 70,
          backgroundColor: '#1E368A',
          position: 'absolute',
          bottom: 50,
          right: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('CreateTask');
        }}>
        <Image
          source={require('../assets/plus_icon.png')}
          style={{height: 30, width: 30, tintColor: 'white'}}
        />
      </TouchableOpacity>

    
      <Modal isVisible={showTask}>
        <EditModel setShowTask = {setShowTask} taskobject={selectedTask}/>
      </Modal>


    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  appBarStyle: {
    height: 50,
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 20,
    marginTop: 10,
  },
  input: {
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderColor: '#E3E4F9',
    borderRadius: 10,
    borderWidth: 1.5,
    padding: 10,
    marginBottom: 15,
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
  },
  buttonStyle: {
    height: 55,
    marginBottom: 10,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#3787EB',
  },
  heading: {fontSize: 18, fontWeight: '600', color: 'black'},
});

export const FormButton = ({tittle, bgcolor, func}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        {backgroundColor: bgcolor, width: '48%', height: 50, borderRadius: 10},
      ]}
      onPress={() => {
        func();
        //  var newTask = {
        //   name : tittle,
        //   category : category,
        //   date: dateString,
        //   startTime: startTime,
        //   endTime: endTime,
        //   description : description,
        //  }
        //  add this tasl to database and clear all inputs
        //  console.log("newTask Created ", newTask);
      }}>
      <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
        {tittle}
      </Text>
    </TouchableOpacity>
  );
};

// <View
// style={{
//   height: '100%',
//   width: '100%',
//   justifyContent: 'center',
//   alignItems: 'center',
//   opacity: 1,
//   position: 'absolute',
// }}>
// <View
//   style={{
//     height: 600,
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     paddingTop: 50,
//   }}>
//   <Text style={styles.heading}>Task Tittle</Text>

//   <TextInput
//     style={styles.input}
//     onChangeText={data => {
//       setTittle(data);
//     }}
//     // value={number}
//     placeholder="UI Design"
//   />

//   <Text style={styles.heading}>Description</Text>

//   <TextInput
//     style={[styles.input, {height: 80, textAlignVertical: 'top'}]}
//     multiline={true}
//     onChangeText={data => {
//       setDescription(data);
//     }}
//   />

//   <Text style={styles.heading}>Date & Time</Text>

//   <View
//     style={{
//       height: 50,
//       marginVertical: 10,
//       paddingHorizontal: 20,
//       borderColor: '#E3E4F9',
//       borderRadius: 10,
//       borderWidth: 1.5,
//       padding: 10,
//       justifyContent: 'center',
//       alignItems: 'start',
//       marginBottom: 15,
//     }}>
//     <Text>17 June 2024 , Tuesday</Text>
//     {/* <Text>{dateString}</Text> */}

//     <TouchableOpacity
//       onPress={() => {
//         // setOpenDate(true);
//       }}
//       style={{
//         right: 0,
//         position: 'absolute',
//         height: 48,
//         width: 48,
//         justifyContent: 'center',
//         borderRadius: 8,
//         alignItems: 'center',
//         backgroundColor: '#ECF4FD',
//       }}>
//       <Image
//         source={require('../assets/calender.png')}
//         style={{height: 25, width: 25, tintColor: '#3787EB'}}
//       />
//     </TouchableOpacity>
//   </View>

//   <View
//     style={{
//       flexDirection: 'row',
//       width: '100%',
//       justifyContent: 'space-evenly',
//     }}>
//     <View style={{flex: 2, marginHorizontal: 15}}>
//       <Text style={[styles.heading, {fontSize: 16}]}>Start Time</Text>
//       <TimeSelector
//       // setOpen={setOpenTime}
//       // time={startTime}
//       // isStart={true}
//       // setIsStartTimer={setIsStartTimer}
//       />
//     </View>
//     <View style={{flex: 2, marginHorizontal: 15}}>
//       <Text style={[styles.heading, {fontSize: 16}]}>End Time</Text>
//       <TimeSelector
//       // setOpen={setOpenTime}
//       // time={endTime}
//       // isStart={false}
//       // setIsStartTimer={setIsStartTimer}
//       />
//     </View>
//   </View>

//   <View style ={{flexDirection: "row" , justifyContent: "space-evenly" , position: "absolute" , bottom: 20 , alignSelf :"center"}}>

//   <FormButton bgcolor ="red" tittle={"Delete"}  />
//   <FormButton bgcolor ="green" tittle={"Done"}  />

//     </View>

//     </View>
// </View>
