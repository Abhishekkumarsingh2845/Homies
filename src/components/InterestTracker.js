import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Eye from 'react-native-vector-icons/AntDesign';
import {Color} from '../utlis/Color';

const InterestTracker = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Eye name="eyeo" color={'#FFFFFF'} size={18} style={{marginLeft: 10}} />
      <View
        style={{
          borderColor: '#FFFFFF',
          borderWidth: 0.6,
          height: 22,
          marginLeft: 5,
        }}
      />
      <Text style={styles.peopleinterested}> 4 People interested</Text>
    </TouchableOpacity>
  );
};

export default InterestTracker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F3F3F',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    // borderBottomRightRadius:30,
    // paddingHorizontal:20,
    width: 200,
    // borderTopLeftRadius:5,
    borderBottomRightRadius:Platform.OS==="ios"? 10:10,
  },
  peopleinterested: {
    fontSize: 15,
    color: Color.white,
    marginLeft: 5,
  },
});
