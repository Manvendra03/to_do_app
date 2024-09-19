import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBar from '../../components/AppBar';

const ContactUs = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#ECF4FD',
        alignItems: 'center',
      }}>
      <AppBar tittle="Contact Us" />
      <Text
        style={{
          color: 'grey',
          paddingHorizontal: 10,
          fontWeight: 600,
          marginBottom: 25,
        }}>
        You can get in touch with us through below platforms. Our Team will
        reach out to you as soon as it would be posiible{' '}
      </Text>
      <View
        style={{
          // height: 200,
          padding: 15,
          width: '93%',
          marginBottom: 20,
          borderRadius: 15,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600',color: "#BABABA"}}>Customer support</Text>
        {/*   Phone Number     */}
        <View
          style={{
            marginVertical: 15,
            marginLeft: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/contact_us/call.png')}
            style={{height: 35, width: 35}}
          />
          <View style={{marginLeft: 15}}>
            <Text style = {{color: "#BABABA"}}>Contact Number</Text>

            <Text style={{fontWeight: '800' , color: "grey"}}>+91 9617474952</Text>
          </View>
        </View>

        {/*   Email Adress     */}
        <View
          style={{
            marginVertical: 15,
            marginLeft: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/contact_us/mail.png')}
            style={{height: 40, width: 40, }}
          />
          <View style={{marginLeft: 15}}>
            <Text style = {{color: "#BABABA"}}>Email Adress</Text>

            <Text style={{fontWeight: '800' , color : "grey"}}>manvendrapatidar@gmail.com</Text>
          </View>
        </View>
      </View>

      {/* Social Mediaa */}
      <View
        style={{
          // height: 200,
          padding: 15,
          width: '93%',
          borderRadius: 15,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600' , color: "#BABABA"}}>Social Media</Text>
        {/*   Instagram     */}
        <View
          style={{
            marginVertical: 15,
            marginLeft: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/contact_us/instagram.png')}
            style={{height: 35, width: 35}}
          />
          <View style={{marginLeft: 15}}>
            <Text style = {{color: "#BABABA"}}>Instagram</Text>

            <Text style={{fontWeight: '800', color: "grey"}}>manvendra.apk</Text>
          </View>
        </View>

        {/*   Facebook     */}
        <View
          style={{
            marginVertical: 15,
            marginLeft: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/contact_us/facebook.png')}
            style={{height: 35, width: 35}}
          />
          <View style={{marginLeft: 15}}>
            <Text style = {{color: "#BABABA"}}>facebook</Text>

            <Text style={{fontWeight: '800', color: "grey"}}>Manvendra Patidar</Text>
          </View>
        </View>
         {/*   Twitter     */}
         <View
          style={{
            marginVertical: 15,
            marginLeft: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/contact_us/twitter.png')}
            style={{height: 35, width: 35}}
          />
          <View style={{marginLeft: 15}}>
            <Text style = {{color: "#BABABA"}}>Twitter</Text>

            <Text style={{fontWeight: '800' , color: "grey"}}>manvendra</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
