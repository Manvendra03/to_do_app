import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/AppBar'
import { app_name, color_combination } from '../../constants'
import { ScrollView } from 'react-native-gesture-handler'
import WarningModel from '../../components/WarningModel'

const Notification = () => {
   
  const notification = [1,2,3,4,5];
  return (
    <View style= {{height: "100%" , width: "100%", backgroundColor: notification.length > 0 ? "white" : "#ECF4FD"  }}>
      <AppBar tittle= "Notification"/>
   

      {
        notification.length > 0 ?
            <ScrollView style = {{flex: 1 , paddingHorizontal: 20 , }}>
            {
              notification.map((notification , index) => {

                return (<NotificationCard index={index} />);
              })
            }
            
          
            </ScrollView>
            :
            <View style = {{paddingTop: 150, flex: 1 , }}>
            <NoNotification/>
            </View>
      }
     </View>
  )
}

export default Notification

const styles = StyleSheet.create({})




const NotificationCard = ({index,tittle,time})=>{
  return (  <View style = {{height: 150 , marginBottom : 15 ,width: "100%" ,borderRadius:20, paddingLeft: 20,paddingVertical: 15 , backgroundColor: color_combination[1].primary}}>
    <View style = {{flexDirection: "row" ,alignItems: "center" }}>
      <Image source={require("../../assets/noNotificationn.png")}  style= {{height: 20 ,width: 20,tintColor: "#FFD700"}} />
      <Text style = {{fontWeight: "bold" , marginLeft: 10,fontSize: 15 ,color: "black"}}>Upcoming Task Reminder</Text>            
    </View>
    <View style = {{marginTop: 10 }}>
      <Text style = {{fontWeight: "500" ,fontSize: 13 ,paddingHorizontal: 5,color: "black" , marginBottom: 5}}>Your task is starting in just a few minutes.... ⌛</Text>            
      <Text style= {{fontWeight : "bold" , fontSize: 16 , paddingLeft: 20 , color:  color_combination[1].secoundary}}>Task : Car Washing</Text>
      <Text style= {{fontWeight : "bold" , fontSize: 16 , paddingLeft: 20,color:  color_combination[1].secoundary}}>start's at 8:00 PM</Text>

      <Text style = {{fontWeight: "500", marginTop: 10 ,fontSize: 13 ,paddingHorizontal: 5,color: "black"}}>get ready to tackle your task with focus and energy!
      </Text>            
      
      {/* <Text style = {{fontWeight: "bold" , marginLeft: 10,fontSize: 15 ,color: "black"}}>Upcoming Task Reminder</Text>             */}

    </View>
  </View>);
}


const NoNotification = () =>{
  return (    
      <View style={{alignItems: "center" , alignSelf: "center"}}>
      <Image source={require("../../assets/noNotificationn.png")}  style= {{height: 150 ,width: 150,tintColor: "#bababa"}} />
      <Text style = {{fontSize: 25 , marginTop: 20,fontWeight: "bold" , color: "black"}}>No Notification</Text> 
      <Text style = {{fontSize: 18,fontWeight: "400" , color: "grey"}}>Notification Inbox Empty</Text> 
      </View>
  );
}