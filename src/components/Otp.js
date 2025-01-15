import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import { ScreenDimensions } from '../utlis/DimensionApi';

const Otp = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.otpcontainer} />
      <TextInput style={styles.otpcontainer} />
      <TextInput style={styles.otpcontainer} />
      <TextInput style={styles.otpcontainer} />
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10
  },
  otpcontainer: {
    backgroundColor: "#F0F0F0",
    width: ScreenDimensions.screenWidth*0.20,
    height: ScreenDimensions.screenHeight*0.07,
    borderRadius: 10,
    textAlign:"center"
  },
});
