import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images, Img} from '../../utlis/ImagesPath';
import {useDispatch, useSelector} from 'react-redux';
import { setUser } from '../../store/AuthSlice';
import { useRoute } from '@react-navigation/native';

const OtpVerify = ({navigation}) => {


    const route = useRoute();
    const {  isExist , response } = route.params || '';
    const dispatch = useDispatch()

  useEffect(() => {
    console.log("isExist ====================" , isExist)
    const timer = setTimeout(() => {
      if (isExist) {
       dispatch(setUser(response));

        navigation.navigate('DrawerNavigator');
       
      } else {
        navigation.navigate('SignUp');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
