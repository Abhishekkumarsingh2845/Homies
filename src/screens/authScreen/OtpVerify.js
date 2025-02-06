import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images, Img} from '../../utlis/ImagesPath';
import {useSelector} from 'react-redux';

const OtpVerify = ({navigation}) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('HomeNavigator', {
  //       screen: 'Home',
  //     });
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);

  const isExist = useSelector(state => state.auth.isExist);
  const token = useSelector(state => state.auth.token);
  const phone= useSelector(state=>state.auth.phoneNo)
  console.log('phone stored in the redux check', phone);
  console.log('token stored in the redux check', token);
  console.log('isExist of the Otp verify screen', isExist);

  // if (!isExist) {
  //   // Redirect to login screen if not logged in
  //   navigation.replace('LoginScreen');
  //   return null; // Prevent rendering of Home screen
  // }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isExist) {
        console.log("isexist at the image otpverify")
        navigation.navigate('HomeNavigator');
       
      } else {
        navigation.navigate('SignUp');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.container}
      source={Img.otpverify}
      resizeMode="cover"></ImageBackground>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf:"center",
  },
});
