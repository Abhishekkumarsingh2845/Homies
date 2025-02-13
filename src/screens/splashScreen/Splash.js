import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('Login');
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);
  return (
    <ImageBackground
      source={Img.splashscr}
      style={styles.container}
      resizeMode="cover"></ImageBackground>
   
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
