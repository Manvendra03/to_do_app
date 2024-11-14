import {StyleSheet, Text, TextInput, View , Image ,TouchableOpacity, Dimensions} from 'react-native';
import React, { useState } from 'react';
import { saveData } from '../Functions/databaseFunctions';


const LoginScreen = ({navigation}) => {
  const [name, setName] = React.useState('');
  const { height } = Dimensions.get('window');
  const textHeight = height/2 - 270;
  
  const images = [
    require('../assets/profiles/profile2.jpg'),
    require('../assets/profiles/profile1.png'),
  
];
  const [image,setImage] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    
    if(name === '')
    {
        return ;
    }
   
    if(saveData("UserData",{name: name , image : image? 0 :1 }))
        {
          console.log('Created User');
          navigation.navigate('Home');
        }
    else
        {
          console.log("try Later Dont able to operate ...!")
        }
    console.log('User name entered:', name);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ECF4FD',
      }}>
      <Text
        style={{
            position: "absolute",
            top: textHeight,
            zIndex: 10,
          fontSize: 30,
          marginBottom: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
        
      </Text>
      <View
        style={{
          height: 400,
          width: '80%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'white',
          marginBottom: 20,
          padding: 25,
          borderRadius: 30,
        }}>
        <View
          style={{
            height: 110,
            width: 110,
            borderRadius: 90,
            backgroundColor: 'white',
            marginBottom: 5,
            justifyContent: "center",
            
          }}>
           <Image source={image ? images[0] : images[1]}
           
           style={{
            height: 110,
            width: 110,
            borderRadius: 90,
          }}>
           </Image>
             </View>
       <TouchableOpacity style={{marginBottom: 60}} onPress={()=>{setImage(!image)}}>
       <Text style={{color: "blue"}}>change Avatar</Text>
       </TouchableOpacity>
       
        <Text style={styles.title}>Enter your name</Text>
        <TextInput
          style={styles.input}
          placeholder="i.g monty"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
    
        <TouchableOpacity style={styles.button} onPress={handleLogin }>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    alignSelf: "flex-start"
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '60%',
    height: 50,
    backgroundColor: '#1E368A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
