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
import React, {useState} from 'react';
import TimeSelector from '../components/TimeSelector';
import Modal from 'react-native-modal';
import {FormButton} from '../screens/HomeScreen';
import DatePicker from 'react-native-date-picker';
import {checkStartandEndTime, convertDateStringToDate, getDayFromIndex, getMonthFromIndex, getTimeFromHoursAndMinutes} from '../Functions/pickerFunctions';


const EditModel = ({setShowTask,taskobject}) => {

   
  const [isEdit , setIsEdit] = useState(false);
  
  const [isCompleted , setIsCompleted] = useState(taskobject.isCompleted ?? false )
  
  //Variables for Form
  
  const [tittle, setTittle] = useState(taskobject.tittle);
  const [description, setDescription] = useState(taskobject.description);



  // variable used for DatePicker  
  const [date, setDate] = useState(new Date());
  const [dateOpener, setDateOpener] = useState(false);

  const [defaultDate,setDefaultDate] = useState(convertDateStringToDate(taskobject.date)); // Convert string to Date


  //setting default value for DateField
  // var CurrentDate =
  //   date.getDate() +
  //   ' ' +
  //   getMonthFromIndex(date.getMonth()) +
  //   ' ' +
  //   date.getFullYear() +
  //   ' , ' +
  //   getDayFromIndex(date.getDay());

  const [dateString, setDateString] = useState(taskobject.date);

  const currentDatee = new Date();
  const startOfMonth = new Date(currentDatee.getFullYear(), currentDatee.getMonth(), currentDatee.getDate()); // First day of current month
  const endOfMonth = new Date(currentDatee.getFullYear(), 11, 0); // Last day of current month


  
  


  // Variable used for TimePicker
  //setting default time for Start and end
  // var CurrentTime = getTimeFromHoursAndMinutes(
  //   date.getHours(),
  //   date.getMinutes(),
  // );

  const [time, setTime] = useState(new Date());


  const [startTime, setStartTime] = useState(taskobject.startTime);
  const [endTime, setEndTime] = useState(taskobject.endTime);
  
  const [isStartTimer, setIsStartTimer] = useState(true);
  const [openStartTime, setOpenStartTime] = useState(false);

  return (
    
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        position: 'absolute',
      }}>
      <View
        style={{
          height: 530,
          backgroundColor: 'white',
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingTop: 40,
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            // backgroundColor: '#ECF4FD','#1E368A'
            backgroundColor: '#1E368A',

            height: 25,
            width: 25,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',

            top: 10,
          }}
          onPress={() => {
            setShowTask(false);
          }}>
          <Image
            source={require('../assets/close.png')}
            style={{
              height: 10,
              width: 10,
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
         {
            isCompleted? <View/> : !isEdit? 
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 40,
                backgroundColor: '#1E368A',
                height: 25,
                paddingHorizontal: 10,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
    
                top: 10,
              }}
              onPress={() => {
                // setShowTask(false);
                setIsEdit(!isEdit);
              }}>
              <Image
                source={require('../assets/pencil.png')}
                style={{
                  height: 10,
                  width: 10,
                  tintColor: 'white',
                }}
              />
    
              <Text style={{fontWeight: '600', marginLeft: 5, color: 'white'}}>
                Edit
              </Text>
            </TouchableOpacity> : <View/>
        }
        <Text style={styles.heading}>Task Tittle</Text>

        <TextInput
          style={[styles.input, {color : isEdit? "black":"#bababa"}]}
         value={tittle}
          editable = {isEdit}
          // placeholderTextColor= {isEdit ? 'black':"#bababa"}
          onChangeText={data => {
            setTittle(data);
          }}
          // value={number}
          // placeholder={taskobject.tittle}
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
          <Text style = {{color: isEdit? "black" : "#bababa"}}>{dateString}</Text>

          <TouchableOpacity
            onPress={() => {
              // setOpenDate(true);
              setDateOpener(true);
            }}

            disabled = {!isEdit}
            style={{
              right: 0,
              position: 'absolute',
              height: 47,
              width: 48,
              justifyContent: 'center',
              borderRadius: 8,
              alignItems: 'center',
              backgroundColor: isEdit ? '#ECF4FD' : "#f1f1f1",
            }}>
            <Image
              source={require('../assets/calender.png')}
              style={{
                height: 25,
                width: 25,
                //  tintColor: 'grey' ,
                tintColor: isEdit? '#1E368A' : "grey",
              }}
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
            setOpen={setOpenStartTime}
            time={startTime}
            isEdit={isEdit}
            isStart={true}
            setIsStartTimer={setIsStartTimer}
            />
          </View>
          <View style={{flex: 2, marginHorizontal: 15}}>
            <Text style={[styles.heading, {fontSize: 16}]}>End Time</Text>
            <TimeSelector
             setOpen={setOpenStartTime}
             time={endTime}
             isEdit={isEdit}
             isStart={false}
             setIsStartTimer={setIsStartTimer}
            />
          </View>
        </View>

        <Text style={styles.heading}>Description</Text>

        <TextInput
          style={[styles.input, {height: 80, textAlignVertical: 'top' , color: isEdit?"black":"#bababa"}]}
          multiline={true}
          editable={isEdit}
          value={description}
          // placeholderTextColor={isEdit? "black": "#bababa"}
          // placeholder={taskobject.description}
          onChangeText={data => {
            setDescription(data);
          }}
        />
 {

   isCompleted ?  <TouchableOpacity style={{ 
    height: 45,
    borderRadius: 12,
    alignSelf:"center",
    justifyContent: "center",
    alignItems:"center",
    position:"absolute",
    width: "90%",
    bottom: 25,
    backgroundColor: "red",
   }}
    onPress={()=>{
      // setIsEdit(false);
      // setShowTask(false);
      setIsCompleted(false);
      }} >
    <Text style = {{fontWeight: "700" , fontSize: 18 , color: "white"}}>Mark as Incomplete</Text>
   </TouchableOpacity>:



        !isEdit ?<View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            position: 'absolute',
            bottom: 10,
            alignSelf: 'center',
          }}>
          <FormButton
            bgcolor="red"
            tittle={'Remove'}
            func={() => {
              setShowTask(false);
            }}
          />
          <FormButton
            bgcolor="green"
            tittle={'Completed'}
            func={() => {
              

              setShowTask(false);

            }}
          />
        </View>
:
         <TouchableOpacity style={{ 
          height: 45,
          borderRadius: 15,
          alignSelf:"center",
          justifyContent: "center",
          alignItems:"center",
          position:"absolute",
          width: "90%",
          bottom: 25,
          backgroundColor: "#1E368A",
         }}
          onPress={()=>{
            // setIsEdit(false);
            checkStartandEndTime(startTime , endTime);

            // setShowTask(false);
            }} >
          <Text style = {{fontWeight: "700" , fontSize: 20 , color: "white"}}>Save</Text>
         </TouchableOpacity>
 }
        {/*     DATE PICKERR     */}
        <DatePicker
          modal
          mode="date"
          locale="In"
          open={dateOpener}
          date={defaultDate}

          minimumDate={startOfMonth} // Minimum date: First day of the current month
          maximumDate={endOfMonth}
          
          onConfirm={data => {
            setDateOpener(false);
            // setDate(data);
            setDefaultDate(data);
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
            setDateOpener(false);
          }}
        />

        {/*    TIME PICKERRR    */}
        <DatePicker
          modal
          mode="time"
          open={openStartTime}
          date={date}
          time={time}
          onConfirm={data => {
            setOpenStartTime(false);
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
            setOpenStartTime(false);
          }}
        />
      </View>
    </View>
  );
};

export default EditModel;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderColor: '#E3E4F9',
    borderRadius: 10,
    borderWidth: 1.5,
    padding: 10,
    marginBottom: 15,
    fontSize: 15,
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
    backgroundColor: '#3787EB',
  },
  heading: {fontSize: 18, fontWeight: '600', color: 'black'},
});
