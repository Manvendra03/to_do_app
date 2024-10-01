import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    Touchable,
    TouchableOpacity,
    TextInput,
    Button,
  } from 'react-native';
  import React, {useState} from 'react';

const TimeSelector = ({setOpen , time , isStart,setIsStartTimer , isEdit = true , ischecked}) => {
  return (
    <View
            style={{
              height: 45,
              marginVertical: 8,
              paddingLeft: 15,
              borderColor: '#E3E4F9',
              borderRadius: 10,
              borderWidth: 1.5,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'start',
              marginBottom: 25,
            }}>
            <Text style = {{color: isEdit? "black" : "#bababa"}}>{isStart ? time : ischecked ? time : ""}</Text>
            <TouchableOpacity
            
              onPress={() => {
                setOpen(true);
                isStart ? setIsStartTimer(true) :setIsStartTimer(false);
              }}
              disabled = {isStart ?!isEdit :  !(isEdit && ischecked)}
              style={{
                right: 0,
                position: 'absolute',
                height: 42,
                width: 40,
                justifyContent: 'center',
                borderRadius: 8,
                alignItems: 'center',
                backgroundColor: isStart ? isEdit ?  '#ECF4FD' : "#f1f1f1" : isEdit && ischecked ? "#ECF4FD" : "#f1f1f1",

              }}>
              <Image
                source={ isStart ? require('../assets/arrow_icon.png') : require('../assets/alarm-clock.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: isStart? isEdit? '#1E368A' :'grey' : isEdit && ischecked? '#1E368A' :'grey',
                  // tintColor: '#1E368A' ,
                  transform: isStart ? [{rotate: '90deg'}] : [],
                }}
              />
            </TouchableOpacity>
          </View>
  )
}

export default TimeSelector

const styles = StyleSheet.create({})