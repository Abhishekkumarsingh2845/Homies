import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';

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
    width: 80,
    height: 50,
    borderRadius: 10,
    textAlign:"center"
  },
});
