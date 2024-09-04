import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {app_name} from '../constants';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{height: '100%', width: '100%'}}>
      <LinearGradient
        colors={['#3787EB', '#6AA5EF', '#FFFFFF','#FFFFFF']}
        style={{height: '100%', width: '100%', alignItems: 'center'}}>
        <Image
          source={require('../assets/welcome.png')}
          style={styles.vector}
        />
        <View
          style={{
            height: 250,
            width: '100%',
            // backgroundColor: 'blue',
            position: 'absolute',

            bottom: 0,
          }}>
          <Text style={styles.welcomeStyle}>Welcome to {app_name}</Text>
          <Text style={styles.descStyle}>A workspace to over 10 Million proffesional around the global of the world{app_name}</Text>
          <TouchableOpacity style = {styles.buttonStyle}> 
            <Text style ={{fontSize: 20 , fontWeight: "700" , color: "white"}}>Let's Go</Text> 
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  vector: {height: 300, width: 300, marginTop: 70},
  welcomeStyle: {
    fontSize: 27,
    fontFamily: 'Montserrat-Italic-VariableFont_wght',
    fontWeight: '700',
    alignSelf: 'center',
    color: "black"
  },
  descStyle: {
    marginTop:10,
    fontSize: 13,
    textAlign: "center",
    width: "80%",
    fontFamily: 'Montserrat-Italic-VariableFont_wght',
    fontWeight: '200',
    alignSelf: 'center',
    color: "grey"
  },
  buttonStyle: {
      height: 55,
      marginTop: 90,
      width: "85%" ,
      justifyContent: "center",
      alignItems:"center",
      alignSelf : "center",
      borderRadius: 15,
      backgroundColor: "#3787EB"    
  }
});
