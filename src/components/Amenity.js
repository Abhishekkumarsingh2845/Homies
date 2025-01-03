import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import Wifi from 'react-native-vector-icons/FontAwesome5';
import {FontText} from '../utlis/CustomFont';

const Amenity = ({txt, mrgnleft}) => {
  return (
    <TouchableOpacity style={[styles.container, {marginLeft: mrgnleft}]}>
      <Wifi name="wifi" size={16} color={'black'} />
      <Text style={styles.amenitytxt}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default Amenity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    alignItems: 'center',
    // justifyContent: 'center',
    // marginHorizontal: 150,
    // marginVertical: 20,
    paddingVertical: 10,

    width: 70,
    borderRadius: 10,
    elevation: 10,
    // height:50,
    // paddingHorizontal:120,
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: {width: 0, height: 2}, // Shadow position (iOS)
    shadowOpacity: 0.2, // Shadow transparency (iOS)
    shadowRadius: 4, // Shadow blur radius (iOS),
  },
  amenitytxt: {
    fontSize: 11,
    fontFamily: FontText.light,
    color: Color.black,
    lineHeight: 16,
  },
});
