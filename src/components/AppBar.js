import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  


const AppBar = ({tittle}) => {
    
   const navigation = useNavigation();

    return (
    <View
    style={{
      height: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    }}>
    <TouchableOpacity
      style={{
        position: 'absolute',
        left: 15,
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#ECF4FD',
      }}
      onPress={()=>{navigation.goBack()}}
      >
      <Image
        source={require('../assets/arrow_icon.png')}
        style={{height: 30, width: 30, transform: [{rotate: '180deg'}]}}
      />
    </TouchableOpacity>
    <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
      {tittle}
    </Text>
  </View>
  )
}

export default AppBar

const styles = StyleSheet.create({})