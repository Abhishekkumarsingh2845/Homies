import {Image, StyleSheet, Text, View,TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {Img} from '../../utlis/ImagesPath';
import Otp from '../../components/Otp';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {useNavigation} from '@react-navigation/native';
const LoginSignup = () => {
  const navigation = useNavigation(); // Initialize navigation
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Img.goback} style={styles.arrow} />
      </TouchableOpacity>
      <Text style={styles.verify}>Verify your mobile number</Text>
      <Text style={styles.sendotp}>We have sent you an OTP on your mobile</Text>
      <Text style={styles.sendno}>number +1 8745XXXX2 </Text>
      <Text style={styles.enterotp}>Enter OTP here</Text>
      <Otp />
      <View style={styles.timer}>
        <Text>00 : 29</Text>
        <Text>Resend Code</Text>
      </View>
      <PrimaryBtn
        txt={'Verify OTP'}
        bgcolor={Color.primary}
        clr={Color.white}
        destination={'Otpverify'}
        mgntop={20}
      />
    </View>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor:Color.white
  },
  timer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15
  },
  arrow: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 10,
  },
  verify: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: Color.black,
    marginTop: 20,
  },
  sendotp: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    color: '#7D7D7D',
    marginTop: 10,
    letterSpacing:1
  },
  sendno: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    color: '#7D7D7D',
  },
  enterotp: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: Color.black,
    marginTop: 40,
  },
});
