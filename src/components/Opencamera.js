import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Cloud from 'react-native-vector-icons/AntDesign';
import { FontText } from '../utlis/CustomFont';

const Opencamera = ({operationtxt="Open your Gallery",fixheight}) => {
  return (
    <TouchableOpacity style={[styles.container,{height:fixheight}]}>
      <Cloud name="clouduploado" size={20}  />
      <Text style={styles.txt}>{operationtxt}</Text>
      </TouchableOpacity>
  );
};

export default Opencamera;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderRadius:10,
    // height:80,
  },
  txt:
  {
    fontSize:14,
    fontFamily:FontText.light,
    lineHeight:20,
    color:"#7D7D7D",
  }
});
