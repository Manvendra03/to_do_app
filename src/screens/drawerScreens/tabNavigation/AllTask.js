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

const AllTask = () => {

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
          height: 85,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 15,
          backgroundColor: '#ffffff',
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: color_combination[index % 4].primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image
            source={item.icon}
            style={{
              height: 30,
              width: 30,
              tintColor: color_combination[index % 4].secoundary,
            }}></Image>
        </View>
        <View
          style={{
            paddingLeft: 16,
            justifyContent: 'space-evenly',
            height: '70%',
          }}>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
            {item.tittle}
          </Text>
          <Text style={{fontSize: 13, fontWeight: '600', color: '#bababa'}}>
            09:00 AM - 11:00 AM
          </Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', right: 10}}
          onPress={() => {
            setShowTask(true);
          }}>
          <Image
            source={require('../../../assets/arrow_icon.png')}
            style={{tintColor: '#bababa', height: 25, width: 25}}
          />
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

export default AllTask

const styles = StyleSheet.create({})