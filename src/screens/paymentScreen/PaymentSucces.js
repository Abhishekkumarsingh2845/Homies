import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PaymentSucces = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/paysucess.png')}
      style={{flex: 1}}></ImageBackground>
  );
};

export default PaymentSucces;

const styles = StyleSheet.create({});
