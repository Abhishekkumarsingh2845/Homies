import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images, Img} from '../../utlis/ImagesPath';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {setUser} from '../../store/AuthSlice';

const OtpVerify = ({navigation}) => {
  const dispatch = useDispatch();

  const route = useRoute();
  const {isExist, response} = route.params || '';

  useEffect(() => {
    console.log('isExist ====================', isExist);
    const timer = setTimeout(() => {
      if (isExist) {
        navigation.navigate('HomeNavigator');
        console.log('navigation to home');
        dispatch(setUser(response));
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
