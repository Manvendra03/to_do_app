import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <View style={{height: 200, width: '100%', backgroundColor: 'white', marginBottom: 10}}>
        <Image
          source={require('../assets/drawer_background.jpg')}
          style={{height: '100%', width: '100%'}}
        />
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: '#ECF4FD',
            position: 'absolute',
            top: 40,
            justifyContent: "center",
            alignSelf: 'center',
            alignItems: 'center',
          }}
        >
          <Image
          source={require('../assets/profilee.jpg')}
          style={{height: '100%', width: '100%',  borderRadius: 50,}}
        />
        </View>
        <Text
          style={{
            position: 'absolute',
            top: 145,
            alignSelf: 'center',
            fontSize: 23,
            fontWeight: '700',
            color: '#ECF4FD',
          }}>
          {' '}
          Rewa
        </Text>
      </View>

      <DrawerItemList {...props} />

      <View style ={{position: "absolute",width: "100%",bottom: 15}}>
      <View style = {{height: 1.5 , width: "100%" , backgroundColor: "#BABABA",marginBottom: 10}}/>  
      <TouchableOpacity  style ={{ width: "100%",alignItems: "center", flexDirection: "row" ,paddingLeft: 15, height: 30}}> 
      <Image source={require("../assets/logout.png")} style = {{height: 20, width:20 ,marginLeft: 10, fontWeight: '800'}}/>
     
      <Text style ={{fontSize: 16 , fontWeight: "700" , color: "black",marginLeft: 10 }}>Logout</Text>
    
        </TouchableOpacity>  
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
