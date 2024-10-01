import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'





const NoTaskAvailable = ({isfinished = false , isPending = false})=>{
    return (
    <View
      style={{
        height: 200,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source= { isPending ?require('../assets/all_task_done.png') : require('../assets/noTask.png')}
        style={{height:  isPending ? 150: 120, width: isPending ? 150 : 120, tintColor: '#BABABA'}}
      />
      <Text 
       style={{
          fontSize:  isfinished || isPending  ? 16:20,
          marginTop: isPending ? 10: 20,
          fontWeight: isfinished ? "700": 'bold',
          color: isfinished || isPending ? "grey": 'black',
          textAlign: "center"
        }}>
        {isPending? "There are no pending tasks  \n at the moment":
             isfinished? "There are no completed tasks  \n at the moment" : "No Task Added yet !" 
        }
       </Text>
     { isfinished || isPending ? <View/> : <Text
        style={{
          fontSize: 12,
          marginTop: 5,
          fontWeight: '600',
          color: 'grey',
        }}>
        {' '}
        Tap the "+" button to create your first task.
      </Text>
     }
   </View>
    );
  }
  
export default NoTaskAvailable

const styles = StyleSheet.create({})
  