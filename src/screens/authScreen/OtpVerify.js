import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images, Img} from '../../utlis/ImagesPath';
import {useSelector} from 'react-redux';

const OtpVerify = ({navigation}) => {


    const route = useRoute();
    const {  isExist } = route.params || '';

  useEffect(() => {
    console.log("isExist ====================" , isExist)
    const timer = setTimeout(() => {
      if (isExist) {
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
