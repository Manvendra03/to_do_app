import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBar from '../../components/AppBar';

const Dashboard = () => {
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <AppBar tittle="Dashboard" />
      <View
        style={{
          backgroundColor: '#ECF4FD',
          height: 185,
          // padding: 15,
          paddingTop: 20,

          marginHorizontal: 15,
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          Today's Task{' '}
        </Text>

        <View style={{flexDirection: 'row' , justifyContent: "space-evenly"}}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#0455C0',
              height: 100,
              borderRadius: 8,
              justifyContent: 'space-evenly',
              paddingHorizontal: 10,
              paddingVertical: 10
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ECF4FD'}}>
              All Task
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              23
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#0455C0',
              height: 100,
              borderRadius: 8,
              justifyContent: 'space-evenly',
              paddingHorizontal: 10,
              paddingVertical: 10
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ECF4FD' , textAlign: "center"}}>
              Pending
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              12
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#0455C0',
              height: 100,
              borderRadius: 8,
              justifyContent: 'space-evenly',
              paddingHorizontal: 10,
              paddingVertical: 10
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ECF4FD'}}>
              finished
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              11
            </Text>
          </View>
          
        </View>
      </View>
      
      
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
