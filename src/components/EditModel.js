import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
  } from 'react-native';
import React from 'react'
import TimeSelector from '../components/TimeSelector';
import Modal from 'react-native-modal';
import FormButton from '../screens/HomeScreen';
const EditModel = () => {
  return (
    
    <View
      style={{
        // height: '100%',
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        position: 'absolute',
      }}>
      <View
        style={{
          height: 550,
          backgroundColor: 'white',
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingTop: 40,
        }}>
       <TouchableOpacity style ={{  position: 'absolute',
            right: 10,
            backgroundColor: "#ECF4FD",
            height: 25,
            width: 25,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",

            top: 10,
          }} 
          onPress={()=>{setShowTask(false)}}
          >
       <Image
          source={require('../assets/close.png')}
          style={{
            height: 10,
            width: 10,
            tintColor: "grey"
          }}
        />
       </TouchableOpacity>
        <Text style={styles.heading}>Task Tittle</Text>

        <TextInput
          style={styles.input}
          onChangeText={data => {
            setTittle(data);
          }}
          // value={number}
          placeholder="UI Design"
        />

        <Text style={styles.heading}>Date & Time</Text>

        <View
          style={{
            height: 50,
            marginVertical: 10,
            paddingHorizontal: 20,
            borderColor: '#E3E4F9',
            borderRadius: 10,
            borderWidth: 1.5,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'start',
            marginBottom: 15,
          }}>
          <Text>17 June 2024 , Tuesday</Text>
          {/* <Text>{dateString}</Text> */}

          <TouchableOpacity
            onPress={() => {
              // setOpenDate(true);
            }}
            style={{
              right: 0,
              position: 'absolute',
              height: 48,
              width: 48,
              justifyContent: 'center',
              borderRadius: 8,
              alignItems: 'center',
              backgroundColor: '#ECF4FD',
            }}>
            <Image
              source={require('../assets/calender.png')}
              style={{height: 25, width: 25, tintColor: '#3787EB'}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flex: 2, marginHorizontal: 15}}>
            <Text style={[styles.heading, {fontSize: 16}]}>Start Time</Text>
            <TimeSelector
            // setOpen={setOpenTime}
            // time={startTime}
            // isStart={true}
            // setIsStartTimer={setIsStartTimer}
            />
          </View>
          <View style={{flex: 2, marginHorizontal: 15}}>
            <Text style={[styles.heading, {fontSize: 16}]}>End Time</Text>
            <TimeSelector
            // setOpen={setOpenTime}
            // time={endTime}
            // isStart={false}
            // setIsStartTimer={setIsStartTimer}
            />
          </View>
        </View>

        <Text style={styles.heading}>Description</Text>

        <TextInput
          style={[styles.input, {height: 80, textAlignVertical: 'top'}]}
          multiline={true}
          onChangeText={data => {
            // setDescription(data);
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            position: 'absolute',
            bottom: 10,
            alignSelf: 'center',
          }}>
          <FormButton bgcolor="red" tittle={'Delete'}  func ={ ()=>{setShowTask(false)}}/>
          <FormButton bgcolor="green" tittle={'Done'} func ={ ()=>{setShowTask(false)}}/>
        </View>
      </View>
    </View>

  )
}

export default EditModel

const styles = StyleSheet.create({})