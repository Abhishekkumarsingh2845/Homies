import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Calendar from 'react-native-vector-icons/MaterialCommunityIcons';
import Down from 'react-native-vector-icons/AntDesign';
import {FontText} from '../utlis/CustomFont';
const DateSelect = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Calendar name="calendar-blank-outline" color={'#737373'} size={12} />
      <Text style={styles.txtstyle}>Today</Text>
      <Down name="down" size={12} color={'#5F6368'} />
    </TouchableOpacity>
  );
};

export default DateSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    width: 100,
    borderRadius: Platform.OS == 'ios' ? 30 : 15,

    paddingHorizontal: 8,
    justifyContent: 'space-around',
  },
  txtstyle: {
    fontSize: 12,
    fontFamily: FontText.light,
  },
});
