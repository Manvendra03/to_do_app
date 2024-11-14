
import AsyncStorage from "@react-native-async-storage/async-storage";


export const fetchData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // console.log('Fetched data:', value);
        const objTemp =  JSON.parse(value);
        return objTemp;
      } else {
        // console.log("No data found for key 'keyy'");
        return null;
      }
    } catch (error) {
      console.error('Error fetching data from AsyncStorage:', error);
      return null;
    }
  };


export const saveData = async (key,value) => {
      const jsonData = JSON.stringify(value);
    try {
      await AsyncStorage.setItem(key,jsonData);
      return true;
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
      return false;
    }
  };
  