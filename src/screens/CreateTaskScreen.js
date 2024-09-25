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
} from 'react-native';

import {
  getDayFromIndex,
  getMonthFromIndex,
  getTimeFromHoursAndMinutes,
} from '../Functions/pickerFunctions';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import TimeSelector from '../components/TimeSelector';
import {NavigationRouteContext} from '@react-navigation/native';
import AppBar from '../components/AppBar';

const CreateTaskScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);

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

  const [endTime, setEndTime] = useState(CurrentTime);

  const [openTime, setOpenTime] = useState(false);

  const [category, setCategory] = useState('Research');

  const [isStartTimer, setIsStartTimer] = useState(true);

  const [tittle, setTittle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ScrollView
      style={{height: '100%', width: '100%', backgroundColor: '#ffffff'}}>
      <AppBar
        navigation={navigation}
        tittle={'Create a Task'}
        style={{left: 0}}
      />

      <KeyboardAvoidingView
        keyboardVerticalOffset={25}
        behavior="position"
        style={{paddingHorizontal: 15}}>
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
            width: '100%',
            marginTop: 10,

            flexDirection: 'row',
            // marginBottom: 25,
            justifyContent: 'space-evenly',
          }}>
          <CategoryTile
            name={'Education'}
            isSelected={category === 'Education'}
            setCategory={setCategory}
          />
          <CategoryTile
            name={'Shopping'}
            isSelected={category === 'Shopping'}
            setCategory={setCategory}
          />
          <CategoryTile
            name={'Fitness'}
            isSelected={category === 'Fitness'}
            setCategory={setCategory}
          />
          
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <CategoryTile
            name={'Work'}
            isSelected={category === 'Work'}
            setCategory={setCategory}
          />
          
          <CategoryTile
            name={'Medical'}
            isSelected={category === 'Medical'}
            setCategory={setCategory}
          />
          <CategoryTile
            name={'social'}
            isSelected={category === 'social'}
            setCategory={setCategory}
          />

          <CategoryTile
            name={'Meal'}
            isSelected={category === 'Meal'}
            setCategory={setCategory}
          />
          {/* <CategoryTile name={"Food"}/> */}
        </View>
        
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginBottom: 25,
            justifyContent: 'space-evenly',
          }}>
        
        <CategoryTile
            name={'Appointment'}
            isSelected={category === 'Appointment'}
            setCategory={setCategory}
          />
            <CategoryTile
            name={'Meeting'}
            isSelected={category === 'Meeting'}
            setCategory={setCategory}
          />


        <CategoryTile
            name={'Other'}
            isSelected={category === 'Other'}
            setCategory={setCategory}
          />

          
          
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
            <Text style={[styles.heading, {fontSize: 16}]}>End Time</Text>
            <TimeSelector
              setOpen={setOpenTime}
              time={endTime}
              isStart={false}
              setIsStartTimer={setIsStartTimer}
            />
          </View>
        </View>
        <Text style={styles.heading}>Description</Text>

        <TextInput
          style={[styles.input, {height: 80, textAlignVertical: 'top'}]}
          multiline={true}
          onChangeText={data => {
            setDescription(data);
          }}
        />

        <TouchableOpacity
          style={[styles.buttonStyle]}
          onPress={() => {
            var newTask = {
              name: tittle,
              category: category,
              date: dateString,
              startTime: startTime,
              endTime: endTime,
              description: description,
            };
            //  add this tasl to database and clear all inputs

            console.log('newTask Created ', newTask);
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
          onConfirm={data => {
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

        {/*    TIME PICKERRR    */}
        <DatePicker
          modal
          mode="time"
          open={openTime}
          date={date}
          time={time}
          onConfirm={data => {
            setOpenTime(false);
            console.log(data.getHours());
            console.log(data.getMinutes());

            isStartTimer
              ? setStartTime(
                  getTimeFromHoursAndMinutes(
                    data.getHours(),
                    data.getMinutes(),
                  ),
                )
              : setEndTime(
                  getTimeFromHoursAndMinutes(
                    data.getHours(),
                    data.getMinutes(),
                  ),
                );

            setIsStartTimer(false);
            // setStartTime(date);
          }}
          onCancel={() => {
            setOpenTime(false);
          }}
        />
      </KeyboardAvoidingView>
    </ScrollView>
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
    marginBottom: 10,
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
        paddingHorizontal: 25,
        marginHorizontal: 5,
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
