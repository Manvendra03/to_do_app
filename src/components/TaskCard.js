// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const TaskCard = ({index, item}) => {
//     return (
//         <View
//           style={{
//             height: 85,
//             width: '90%',
//             alignSelf: 'center',
//             borderRadius: 15,
//             backgroundColor: '#ffffff',
//             marginTop: 20,
//             flexDirection: 'row',
//             paddingHorizontal: 15,
//             alignItems: 'center',
//           }}>
//           <View
//             style={{
//               height: 60,
//               width: 60,
//               backgroundColor: color_combination[index % 4].primary,
//               justifyContent: 'center',
//               alignItems: 'center',
//               borderRadius: 10,
//             }}>
//             <Image
//               source={item.icon}
//               style={{
//                 height: 30,
//                 width: 30,
//                 tintColor: color_combination[index % 4].secoundary,
//               }}></Image>
//           </View>
//           <View
//             style={{
//               paddingLeft: 16,
//               justifyContent: 'space-evenly',
//               height: '70%',
//             }}>
//             <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
//               {item.tittle}
//             </Text>
//             <Text style={{fontSize: 13, fontWeight: '600', color: '#bababa'}}>
//               09:00 AM - 11:00 AM
//             </Text>
//           </View>
//           <TouchableOpacity
//             style={{position: 'absolute', right: 10}}
//             onPress={() => {
//               setShowTask(true);
//             }}>
//             <Image
//               source={require('../../../assets/arrow_icon.png')}
//               style={{tintColor: '#bababa', height: 25, width: 25}}
//             />
//           </TouchableOpacity>
//         </View>
//       );
// }

// export default TaskCard

// const styles = StyleSheet.create({})