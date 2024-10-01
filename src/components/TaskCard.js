import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  import { getImageWithCategory } from '../Functions/taskLogoSelector';
import { color_combination } from '../constants';
  

const TaskCard = ({index,item,setShowTask ,setSelectedTask}) => {

    // console.log("*************************************",{index});
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
              source={getImageWithCategory(item.category)}
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
            <Text style={{fontSize: 13, fontWeight: '600', color:   item.isCompleted != true ? '#bababa' : "#38AF48"}}>
             
             {
              //is completed !! item.iscomplted ?
              // item.isCompleted != true ?  item.startTime + " - "+item.startTime
              item.isCompleted != true ? "started at "+ item.startTime 

              : "completed"
             }
              
              </Text>
          </View>
          <TouchableOpacity
            style={{position: 'absolute', right: 10}}
            onPress={() => {
                // console.log("Tappeddd ...");
              
                setSelectedTask(item);

                setShowTask(true);
            }}>
            <Image
              source={require('../assets/arrow_icon.png')}
              style={{tintColor: '#bababa', height: 25, width: 25}}
            />
          </TouchableOpacity>
        </View>
      );
}

export default TaskCard

const styles = StyleSheet.create({})