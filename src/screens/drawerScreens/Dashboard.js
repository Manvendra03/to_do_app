import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBar from '../../components/AppBar';
import CustomLineChart from '../../components/CustomLineChart';
import { ScrollView } from 'react-native-gesture-handler';

const Dashboard = () => {
  return (
    <ScrollView
      style={{
        height: '100%', width: '100%',
        backgroundColor: 'white',
      }}>
      <AppBar tittle="Dashboard" />
      <View
        style={{
          backgroundColor: '#ECF4FD',
          height: 185,
          // padding: 15,
          marginTop: -10,
          paddingTop: 20,
          marginBottom: 20,
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

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#1E368A',
              height: 100,
              borderRadius: 8,
              justifyContent: 'space-evenly',
              paddingHorizontal: 10,
              paddingVertical: 10,
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
              backgroundColor: '#1E368A',
              height: 100,
              borderRadius: 8,
              justifyContent: 'space-evenly',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ECF4FD',
                textAlign: 'center',
              }}>
              Pending
             </Text>
             <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              12
             </Text>
          </View>
            <View
            style={{
              alignItems: 'center',
              backgroundColor: '#1E368A',
              height: 100,
              borderRadius: 8,
              justifyContent: 'space-evenly',
              paddingHorizontal: 10,
              paddingVertical: 10,
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
      <View style= {{backgroundColor: "#ECF4FD" , marginHorizontal:15, paddingHorizontal:15 , borderRadius: 15}}>
       <Text style = {{fontSize: 20 , fontWeight: "bold", color: "black" , alignSelf: "center",marginTop:20  , marginBottom:35}}>Weekly Report</Text>
       
        {/* Pending Task Chart */}
        <CustomLineChart  dataa={ [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ]}/>
       <Text style = {{fontSize: 15,fontWeight: "500", color : "black", alignSelf: "center",marginTop: 5}}>Pending Tasks</Text>
       <Text style = {{fontSize: 13, color : "grey",alignSelf:"center",marginTop: 5,marginBottom: 40}}> {'( '}Average Incomplited task in this week is 40% {' )'}</Text>

        {/* Completed Task Chart  */}
       <CustomLineChart  dataa={ [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ]}/>
       <Text style = {{fontSize: 15,fontWeight: "500", color : "black", alignSelf: "center",marginTop: 5}}>Completed Tasks</Text>
       <Text style = {{fontSize: 13, color : "grey",alignSelf:"center",marginTop: 5,marginBottom: 50}}> {'( '}Average Complition of task in this week is 40% {' )'}</Text>

      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
