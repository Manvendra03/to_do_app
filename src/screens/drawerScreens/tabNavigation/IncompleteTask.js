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
import React from 'react'
import AppBar from '../../../components/AppBar'
import { color_combination } from '../../../constants'
import { FormButton } from '../../HomeScreen';
import NoTaskAvailable from '../../../components/NoTaskAvailable';

const IncompleteTask = ({route}) => {
 
  const setSelectedTask = route.params.setSelectedTask;
  const setShowTask = route.params.setShowTask;
  
  
  // const taskData = [
  //   {
  //     icon: require('../../../assets/task_Icons/brush.png'),
  //     tittle: 'UI Design',
  //     description: '',
  //     time: '',
  //     isCompleted: false,
  //   },
  //   {
  //     icon: require('../../../assets/task_Icons/other.png'),
  //     tittle: 'rent Car',
  //     description: '',
  //     time: '',
  //     isCompleted: false,
  //   },
  //   {
  //     icon: require('../../../assets/task_Icons/brush.png'),
  //     tittle: 'App Development',
  //     description: '',
  //     time: '',
  //     isCompleted: false,
  //   },
  //   {
  //     icon: require('../../../assets/task_Icons/book.png'),
  //     tittle: 'stock Market Revision ',
  //     description: '',
  //     time: '',
  //     isCompleted: false,
  //   },
  //   {
  //     icon: require('../../../assets/task_Icons/cart.png'),
  //     tittle: 'Shopping',
  //     description: '',
  //     time: '',
  //     isCompleted: false,
  //   },
  //   {
  //     icon: require('../../../assets/task_Icons/eat.png'),
  //     tittle: 'Eatting',
  //     description: '',
  //     time: '',
  //     isCompleted: false,
  //   },
  //   {
  //     icon: require('../../../assets/task_Icons/brush.png'),
  //     tittle: 'UI Design',
  //     description: '',
  //     time: '',
  //     isCompleted: false,
  //   },
  //   {
  //     icon: require('../../../assets/task_Icons/meet.png'),
  //     tittle: 'Out with friends',
  //     description: '',
  //     time: '',
  //     isCompleted: false,
  //   },
  // ];
   
  const taskData =
  [
    {
      icon: require('../../../assets/task_Icons/eat.png'),
      tittle: 'UI Design',
      category: "Work",
      date: "24 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      description: 'This is description for other tasks',
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/other.png'),
      tittle: 'rent Car',
      description: 'This is renting car and i want to rent car ',
      category: "Business",
      date: "27 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/eat.png'),
      tittle: 'App Development',
      description: 'This is app dev with react-native ',
       category: "Development",
      date: "27 October 2024 , Tuesday",
      startTime: "1:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/book.png'),
      tittle: 'stock Market Revision ',
      description: 'Option trading gain only profit hacker boltey',
       category: "Learning",
      date: "31 December 2024 , Tuesday",
      startTime: "1:45 PM",
      endTime: "2:55 PM",
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/cart.png'),
      tittle: 'Shopping',
      description: 'grocessarys',
       category: "Other",
      date: "29 September 2024 , Tuesday",
      startTime: "4:34 PM",
      endTime: "7:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/eat.png'),
      tittle: 'Eatting',
      description: '',
       category: "Meal",
      date: "24 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/eat.png'),
      tittle: 'UI Design',
      description: '',
       category: "Work",
      date: "24 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/meet.png'),
      tittle: 'Out with friends',
      description: '',
       category: "Social",
      date: "24 September 2024 , Tuesday",
      startTime: "3:34 PM",
      endTime: "5:45 PM",
      isCompleted: false,
    },
  ];



  const renderTasks = ({index, item}) => {
    // console.log("item : ",item);

    return (
      <View
        style={{
          // height: 85,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 15,
          backgroundColor: '#ffffff',
          marginTop: 20,
          padding: 15,
          // paddingHorizontal: 15,
          alignItems: 'flex-start',
        }}>
       
       <View style = {{flexDirection: 'row',marginTop: 3}}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: color_combination[index % 4].primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image
            source={item.icon}
            style={{
              height: 25,
              width: 25,
              tintColor: color_combination[index % 4].secoundary,
            }}></Image>
        </View>
        <View
          style={{
            paddingLeft: 16,
            marginTop: -5,
            // justifyContent: 'space-evenly',
            height: '100%',
          }}>
          <Text style={{fontSize: 18,marginTop: 5, fontWeight: '600', color: 'black'}}>
            {item.tittle}
          </Text>
          <Text style={{fontSize: 12, fontWeight: '600', marginTop: 2, color:  "#FF3500"}}>
            Incomplete
              </Text>
         
        </View>

        </View>
        <Text numberOfLines = {2} style={{fontSize: 13 , color: '#BABABA',overflow: "hidden",lineHeight: 17}}>
          {'\t\t\t\t\t\t\t\t\t'}Object containing the initial height and width of the screens. Passing this will improve the initial rendering performance. For most apps, this is a good default  
          </Text>

       <TouchableOpacity style= {{  padding: 5,flexDirection : "row", alignItems: "center" , backgroundColor: "transparent" , position: "absolute", top: 10, right: 15, borderRadius: 3 }} 
           onPress={()=>{
            setSelectedTask(item) ;
            setShowTask(true);
           }}> 
        <Image source={require("../../../assets/pencil.png")} style = {{height: 15 , width:15 , tintColor: "grey"}} />
        {/* <Text style = {{fontWeight: 'bold',marginLeft: 5 , fontSize: 13 , color :"grey"}} >Edit</Text> */}
       
        </TouchableOpacity> 
      </View>
      
      
    );
  };

  return (
    <View style ={{backgroundColor: "#ECF4FD" , height: "100%" ,}}>
     {/* Task List */}
     <View style={{flex: 1}}>
       
       {
       
       taskData.length > 0 ?
       <FlatList
          // data={[1, 2, 3, 4, 56, 7, 2, 3, 4, 56, 7]}

          data={taskData}
          renderItem={renderTasks}
          ListFooterComponent={<View style={{height: 60}} />}
        />: 
        
           <View style={{marginVertical: '18%', justifyContent: 'center'}}>
             <NoTaskAvailable isPending = {true}/>
           </View>
       
       }  
        </View>
     
    </View>
  )
}

export default IncompleteTask

const styles = StyleSheet.create({})