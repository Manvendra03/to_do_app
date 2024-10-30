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
import React, { useContext, useEffect, useState } from 'react'
import AppBar from '../../../components/AppBar'
import { color_combination } from '../../../constants'
import { FormButton } from '../../HomeScreen';
import NoTaskAvailable from '../../../components/NoTaskAvailable';
import { BaseContext } from '../../../../App';
import { getImageWithCategory } from '../../../Functions/taskLogoSelector';

const IncompleteTask = ({route}) => {
 
  const setSelectedTask = route.params.setSelectedTask;
  const setSelectedIndex = route.params.setSelectedIndex;
  const setShowTask = route.params.setShowTask;
  
  const {incompletedTaskList} = useContext(BaseContext);

  const [taskData , setTaskData] = useState([]);
 
  
  useEffect(()=>{
    
    setTaskData(incompletedTaskList);
      

  } ,[incompletedTaskList])


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
            source={getImageWithCategory(item.category)}
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
            setSelectedIndex(index);
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