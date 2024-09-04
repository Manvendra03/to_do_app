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

const TimeSelector = ({setOpen , time , isStart,setIsStartTimer }) => {
  return (
    <View
            style={{
              height: 50,
              marginVertical: 8,
              paddingHorizontal: 20,
              borderColor: '#E3E4F9',
              borderRadius: 10,
              borderWidth: 1.5,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'start',
              marginBottom: 25,
            }}>
            <Text>{time}</Text>
            <TouchableOpacity
              onPress={() => {
                setOpen(true);
                isStart ? setIsStartTimer(true) :setIsStartTimer(false);
              }}
              style={{
                right: 0,
                position: 'absolute',
                height: 48,
                width: 48,
                justifyContent: 'center',
                borderRadius: 8,
                alignItems: 'center',
                backgroundColor: '#ECF4FD',
              }}>
              <Image
                source={require('../assets/arrow_icon.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: '#3787EB',
                  transform: [{rotate: '90deg'}],
                }}
              />
            </TouchableOpacity>
          </View>
  )
}

export default TimeSelector

const styles = StyleSheet.create({})