import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import AppBar from '../../../components/AppBar';
import {color_combination} from '../../../constants';
import TaskCard from '../../../components/TaskCard';
import NoTaskAvailable from '../../../components/NoTaskAvailable';

const CompleteTask = ({route}) => {
  const setSelectedTask = route.params.setSelectedTask;
  const setShowTask = route.params.setShowTask;

  const taskData = 
  [
    {
      tittle: 'UI Design',
      category: 'Work',
      date: '24 September 2024 , Tuesday',
      startTime: '3:34 PM',
      endTime: '5:45 PM',
      description: 'This is description for other tasks',
      isCompleted: true,
    },
    {
      tittle: 'rent Car',
      description: 'This is renting car and i want to rent car ',
      category: 'Work',
      date: '27 September 2024 , Tuesday',
      startTime: '3:34 PM',
      endTime: '5:45 PM',
      isCompleted: true,
    },
    {
      tittle: 'App Development',
      description: 'This is app dev with react-native ',
      category: 'Work',
      date: '27 October 2024 , Tuesday',
      startTime: '1:34 PM',
      endTime: '5:45 PM',
      isCompleted: true,
    },
    {
      tittle: 'stock Market Revision ',
      description: 'Option trading gain only profit hacker boltey',
      category: 'Education',
      date: '31 December 2024 , Tuesday',
      startTime: '1:45 PM',
      endTime: '2:55 PM',
      isCompleted: true,
    },
    
  ];
  // const taskData = [
  //   {
  //     // icon: require('../assets/task_Icons/brush.png'),
  //     tittle: 'UI Design',
  //     category: "Design",
  //     date: "24 September 2024 , Tuesday",
  //     startTime: "3:34 PM",
  //     endTime: "5:45 PM",
  //     description: 'This is description for other tasks',
  //     isCompleted: false,
  //   },
  //   {
  //     // icon: require('../assets/task_Icons/other.png'),
  //     tittle: 'rent Car',
  //     description: 'This is renting car and i want to rent car ',
  //     category: "Business",
  //     date: "27 September 2024 , Tuesday",
  //     startTime: "3:34 PM",
  //     endTime: "5:45 PM",
  //     isCompleted: false,
  //   },
  //   {
  //     // icon: require('../assets/task_Icons/brush.png'),
  //     tittle: 'App Development',
  //     description: 'This is app dev with react-native ',
  //      category: "Development",
  //     date: "27 October 2024 , Tuesday",
  //     startTime: "1:34 PM",
  //     endTime: "5:45 PM",
  //     isCompleted: false,
  //   },
  //   {
  //     // icon: require('../assets/task_Icons/book.png'),
  //     tittle: 'stock Market Revision ',
  //     description: 'Option trading gain only profit hacker boltey',
  //      category: "Learning",
  //     date: "31 December 2024 , Tuesday",
  //     startTime: "1:45 PM",
  //     endTime: "2:55 PM",
  //     isCompleted: false,
  //   },
  //   {
  //     // icon: require('../assets/task_Icons/cart.png'),
  //     tittle: 'Shopping',
  //     description: 'grocessarys',
  //      category: "Other",
  //     date: "29 September 2024 , Tuesday",
  //     startTime: "4:34 PM",
  //     endTime: "7:45 PM",
  //     isCompleted: false,
  //   },
  //   {
  //     // icon: require('../assets/task_Icons/eat.png'),
  //     tittle: 'Eatting',
  //     description: '',
  //      category: "Design",
  //     date: "24 September 2024 , Tuesday",
  //     startTime: "3:34 PM",
  //     endTime: "5:45 PM",
  //     isCompleted: false,
  //   },
  //   {
  //     // icon: require('../assets/task_Icons/brush.png'),
  //     tittle: 'UI Design',
  //     description: '',
  //      category: "Design",
  //     date: "24 September 2024 , Tuesday",
  //     startTime: "3:34 PM",
  //     endTime: "5:45 PM",
  //     isCompleted: false,
  //   },
  //   {
  //     // icon: require('../assets/task_Icons/meet.png'),
  //     tittle: 'Out with friends',
  //     description: '',
  //      category: "Design",
  //     date: "24 September 2024 , Tuesday",
  //     startTime: "3:34 PM",
  //     endTime: "5:45 PM",
  //     isCompleted: false,
  //   },
  // ];
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
    //         source={item.icon}
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
    //       <Text style={{fontSize: 18, textDecorationLine : "line-through " ,fontWeight: '600', color: 'black'}}>
    //         {item.tittle}
    //       </Text>
    //       <Text style={{fontSize: 13, fontWeight: '600', color: '#BABABA'}}>
    //         Completed
    //       </Text>
    //     </View>
    //     <TouchableOpacity
    //       style={{position: 'absolute', right: 10}}
    //       onPress={() => {
    //         setShowTask(true);
    //       }}>
    //       <Image
    //         source={require('../../../assets/arrow_icon.png')}
    //         style={{tintColor: '#bababa', height: 25, width: 25}}
    //       />
    //     </TouchableOpacity>
    //   </View>
    // );
    return (
      <TaskCard
        index={index}
        item={item}
        setShowTask={setShowTask}
        setSelectedTask={setSelectedTask}
      />
    );
  };

  return (
    <View style={{backgroundColor: '#ECF4FD', height: '100%'}}>
      {/* Task List */}
      <View style={{flex: 1}}>
        {taskData.length > 0 ? (
          <FlatList
            // data={[1, 2, 3, 4, 56, 7, 2, 3, 4, 56, 7]}

            data={taskData}
            renderItem={renderTasks}
            ListFooterComponent={<View style={{height: 60}} />}
          />
        ) : (
          <View style={{marginVertical: '20%', justifyContent: 'center'}}>
            <NoTaskAvailable isfinished = {true} />
          </View>
        )}
      </View>
    </View>
  );
};

export default CompleteTask;

const styles = StyleSheet.create({});
