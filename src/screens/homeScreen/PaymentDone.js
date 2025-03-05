import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';

const PaymentDone = () => {
  const nav = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      nav.navigate('BottomTab');
    }, 5000);
    return () => clearTimeout(timer);
  },[nav]);
  return (
    <ImageBackground
      style={styles.container}
      source={Img.paydone}
      resizeMode="cover"></ImageBackground>
  );
};

export default PaymentDone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf:"center",
  },
});
