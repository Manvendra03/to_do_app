import AsyncStorage from "@react-native-async-storage/async-storage";


const setData = async (key,value) => {
  
    try {
      console.log("runn" , value)
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue); 
    } catch (e) {
    console.log("Rorrrr");
       //POP UP :  
      // saving error
    }
  };

  

export const getData = async (key) => {
    try {
        console.log("okaay");
     
        const jsonValue = await AsyncStorage.getItem(key);
      console.log("runnKeyyyyyyy" , JSON.parse(jsonValue));
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
      return jsonValue;
    } catch (e) {
      //POP UP  
      // error reading value
    }
  };