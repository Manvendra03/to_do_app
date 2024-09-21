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

const IncompleteTask = () => {
 
  const taskData = [
    {
      icon: require('../../../assets/task_Icons/brush.png'),
      tittle: 'UI Design',
      description: '',
      time: '',
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/other.png'),
      tittle: 'rent Car',
      description: '',
      time: '',
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/brush.png'),
      tittle: 'App Development',
      description: '',
      time: '',
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/book.png'),
      tittle: 'stock Market Revision ',
      description: '',
      time: '',
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/cart.png'),
      tittle: 'Shopping',
      description: '',
      time: '',
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/eat.png'),
      tittle: 'Eatting',
      description: '',
      time: '',
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/brush.png'),
      tittle: 'UI Design',
      description: '',
      time: '',
      isCompleted: false,
    },
    {
      icon: require('../../../assets/task_Icons/meet.png'),
      tittle: 'Out with friends',
      description: '',
      time: '',
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
          <Text style={{fontSize: 13, fontWeight: '600', color: '#bababa'}}>
            09:00 AM - 11:00 AM
          </Text>
         
        </View>

        </View>
        <Text numberOfLines = {2} style={{fontSize: 13 , color: '#BABABA',overflow: "hidden",lineHeight: 17}}>
          {'\t\t\t\t\t\t\t\t\t'}Object containing the initial height and width of the screens. Passing this will improve the initial rendering performance. For most apps, this is a good default  
          </Text>

       <TouchableOpacity style= {{  padding: 5,flexDirection : "row", alignItems: "center" , backgroundColor: "transparent" , position: "absolute", top: 10, right: 15, borderRadius: 3 }}> 
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
        <FlatList
          // data={[1, 2, 3, 4, 56, 7, 2, 3, 4, 56, 7]}

          data={taskData}
          renderItem={renderTasks}
          ListFooterComponent={<View style={{height: 60}} />}
        />
      </View>
     
    </View>
  )
}

export default IncompleteTask

const styles = StyleSheet.create({})