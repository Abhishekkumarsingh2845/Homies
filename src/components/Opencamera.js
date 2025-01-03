import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Cloud from 'react-native-vector-icons/AntDesign';
import { FontText } from '../utlis/CustomFont';

const Opencamera = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Cloud name="clouduploado" size={20}  />
      <Text style={styles.txt}>Open your Camera</Text>
      </TouchableOpacity>
  );
};

export default Opencamera;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    borderRadius:10,
  },
  txt:
  {
    fontSize:14,
    fontFamily:FontText.light,
    lineHeight:20,
    color:"#7D7D7D",
  }
});
