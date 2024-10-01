import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Dimensions,
  StatusBar,
  Keyboard,
} from 'react-native';

import {
  getDayFromIndex,
  getMonthFromIndex,
  getTimeFromHoursAndMinutes,
} from '../Functions/pickerFunctions';
import React, {useState} from 'react';

import CheckBox from 'react-native-check-box';
import DatePicker from 'react-native-date-picker';
import TimeSelector from '../components/TimeSelector';
import {NavigationRouteContext} from '@react-navigation/native';
import AppBar from '../components/AppBar';
import WarningModal from '../components/WarningModel';

const CreateTaskScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);

  const currentDatee = new Date();
  const startOfMonth = new Date(
    currentDatee.getFullYear(),
    currentDatee.getMonth(),
    currentDatee.getDate(),
  ); // First day of current month
  const endOfMonth = new Date(currentDatee.getFullYear(), 11, 0); // Last day of current month

  //setting default value for DateField
  var CurrentDate =
    date.getDate() +
    ' ' +
    getMonthFromIndex(date.getMonth()) +
    ' ' +
    date.getFullYear() +
    ' , ' +
    getDayFromIndex(date.getDay());
  const [dateString, setDateString] = useState(CurrentDate);

  //setting default time for Start and end
  var CurrentTime = getTimeFromHoursAndMinutes(
    date.getHours(),
    date.getMinutes(),
  );

  const [time, setTime] = useState(new Date());

  const [startTime, setStartTime] = useState(CurrentTime);
  const [alarmTime, setAlarmTime] = useState(CurrentTime);

  const [openTime, setOpenTime] = useState(false);

  const [category, setCategory] = useState('Education');

  const [isStartTimer, setIsStartTimer] = useState(true);
  const [ischecked , setIsChecked] = useState(false);

  const [tittle, setTittle] = useState('');
  const [description, setDescription] = useState('');

  const[showTittleWarning,setShowTittleWarning] = useState(false);
  const [showPastWarning, setShowPastWarning] = useState(false);
  // const [showEndTimeWarning, setShowEndTimeWarning] = useState(false);

  // const [finalCheckWarning, setFinalCheckWarning] = useState(false);

  const categories = [
    {id: '1', title: 'Education'},
    {id: '2', title: 'Shopping'},
    {id: '3', title: 'Fitness'},
    {id: '4', title: 'Work'},
    {id: '5', title: 'social'},
    {id: '6', title: 'Meal'},

    {id: '7', title: 'Appointment'},
    {id: '8', title: 'Meeting'},

    {id: '9', title: 'Other'},
  ];

  const myHeight = Dimensions.get('window').height;

  // console.log(myHeight);
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#ffffff'}}>
      <AppBar
        navigation={navigation}
        tittle={'Create a Task'}
        style={{left: 0}}
      />

      <ScrollView
        style={{
          paddingHorizontal: 15,
          paddingTop: 10,
          // height: myHeight-80-StatusBar.currentHeight,
          // height : myHeight-80,
          // backgroundColor: "grey"
          // flex: 1,
        }}>
        {/* <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}> */}
        <KeyboardAvoidingView
        // style={{ flex: 1 }}
        // keyboardVerticalOffset={52}
        // behavior={"position"}
        >
          <Text style={styles.heading}>Task Tittle</Text>

          <TextInput
            style={styles.input}
            onChangeText={data => {
              setTittle(data);
            }}
            // value={number}
            placeholder="UI Design"
          />

          <Text style={[styles.heading, {marginTop: 8}]}>Category</Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap', // This will allow items to wrap to the next line
              justifyContent: 'flex-start', // Adjust the spacing between items
              paddingVertical: 10,
              paddingLeft: 10,
              paddingRight: 5,
            }}>
            {categories.map(categoryy => (
              <CategoryTile
                name={categoryy.title}
                isSelected={category === categoryy.title}
                setCategory={setCategory}
              />
            ))}
          </View>

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
            {/* <Text>17 June 2024 , Tuesday</Text> */}
            <Text style={{color: 'black'}}>{dateString}</Text>

            <TouchableOpacity
              onPress={() => {
                setOpenDate(true);
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
                style={{height: 25, width: 25, tintColor: '#1E368A'}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              // marginTop: 5,
              justifyContent: 'space-evenly',
            }}>
            <View style={{flex: 2, marginHorizontal: 15}}>
              <Text style={[styles.heading, {fontSize: 16}]}>Start Time</Text>
              <TimeSelector
                setOpen={setOpenTime}
                time={startTime}
                isStart={true}
                setIsStartTimer={setIsStartTimer}
              />
            </View>
            <View style={{flex: 2, marginHorizontal: 15}}>
              <CheckBox
                style={{ marginLeft : 5 }}
                onClick={() => { setIsChecked(!ischecked)}}
                isChecked={ischecked}
                checkedCheckBoxColor = {"#1E368A"}
                rightText={'Set Alarm'}
                rightTextStyle = {[styles.heading, {fontSize: 16 , marginLeft: 5 }]}
              />
              <TimeSelector
                setOpen={setOpenTime}
                time={alarmTime}
                isStart={false}
                ischecked={ischecked}
                setIsStartTimer={setIsStartTimer}
              />
            </View>
          </View>
          <Text style={styles.heading}>Description</Text>

          <TextInput
            style={[
              styles.input,
              {height: 110, textAlignVertical: 'top', flexWrap: 'wrap'},
            ]}
            multiline={true}
            returnKeyType="done" // Ensure 'Done' button appears
            // multiline={true}       // Enable multiline input
            blurOnSubmit={true} // Dismiss keyboard on 'Done' press
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={data => {
              setDescription(data);
            }}
          />

          <TouchableOpacity
            style={[
              styles.buttonStyle,
              // {position: "absolute" ,},
              {marginTop: 20, marginBottom: 20},
            ]}
            onPress={() => {
              
              if(tittle === "")
              {
                  setShowTittleWarning(true);
              }
              else{
                navigation.goBack();
            
              }
              
              // var newTask = {
              //   name: tittle,
              //   category: category,
              //   date: dateString,
              //   startTime: startTime,
              //   description: description,
              // };
              
               
              //  add this tasl to database and clear all inputs

              // console.log('newTask Created ', newTask);
            }}>
            <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
              Create Task
            </Text>
          </TouchableOpacity>

          {/*     DATE PICKERR     */}
          <DatePicker
            modal
            mode="date"
            locale="In"
            open={openDate}
            date={date}
            // minimumDate={new Date()}
            minimumDate={startOfMonth} // Minimum date: First day of the current month
            maximumDate={endOfMonth}
            onConfirm={data => {
              // setFinalCheckWarning(false);
              setOpenDate(false);

              setDate(data);
              // console.log( "month",getMonthFromIndex(data.getMonth()));
              // console.log("day",getDayFromIndex(data.getDay()));
              // console.log("date",data.getDate());
              // console.log( "year",data.getFullYear());

              var selectedDate =
                data.getDate() +
                ' ' +
                getMonthFromIndex(data.getMonth()) +
                ' ' +
                data.getFullYear() +
                ' , ' +
                getDayFromIndex(data.getDay());
              // console.log("selected Date ",selectedDate);

              setDateString(selectedDate);
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
          />

          {/* {Time Pickerrrr} */}
          <DatePicker
            modal
            mode="time"
            open={openTime}
            date={date}
            time={time}
            onConfirm={data => {
              const currentTime = new Date();
              const selectedTime = new Date(currentTime);

              // Set the selected time hours and minutes
              selectedTime.setHours(data.getHours());
              selectedTime.setMinutes(data.getMinutes());

              // Close the modal in all cases to avoid crashing
              setOpenTime(false);

              // Compare selected time with the current time
              if (isStartTimer) {
                // if timer is startTimer
                if (selectedTime.getTime() > currentTime.getTime()) {
                  // If it's for the start timer, just set the start time
                  setStartTime(
                    getTimeFromHoursAndMinutes(
                      data.getHours(),
                      data.getMinutes(),
                    ),
                  );
                } else {
                  setShowPastWarning(true);
                }
                setIsStartTimer(false);
              } else {
                // If Timer is alerm
                setAlarmTime(getTimeFromHoursAndMinutes(
                  data.getHours(),
                  data.getMinutes(),
                ),)
              }
            }}
            onCancel={() => {
              setOpenTime(false);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <WarningModal
        visible={showPastWarning}
        title={'Invaild Input'}
        description={'Choose a valid future time.'}
        onOkPress={() => {
          setShowPastWarning(false);
        }}
      />
      
      <WarningModal
        visible={showTittleWarning}
        title={'Invaild Input'}
        description={'Tittle must not be empty'}
        onOkPress={() => {
          setShowTittleWarning(false);
        }}
      />
    </View>
  );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
  heading: {fontSize: 18, fontWeight: '600', color: 'black'},
  input: {
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#E3E4F9',
    borderRadius: 10,
    borderWidth: 1.5,
    padding: 10,
    marginBottom: 15,
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
  },
  buttonStyle: {
    height: 55,
    // marginBottom: 10,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#1E368A',
  },
});

const CategoryTile = ({name, isSelected, setCategory}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setCategory(name);
      }}
      style={{
        paddingVertical: 7,
        paddingHorizontal: 15,
        marginHorizontal: 2,
        marginVertical: 3,
        justifyContent: 'center',
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: isSelected ? '#1E368A' : '#ECF4FD',
      }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          color: isSelected ? 'white' : 'black',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
