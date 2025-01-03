import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';

const RoomAvailability = ({text, backgroundColor, textColor,mrnhor}) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor || Color.noroomclr,marginHorizontal:mrnhor}]}>
      <Text style={[styles.text, {color: textColor || Color.white}]}>{text}</Text>
    </View>
  );
};

export default RoomAvailability;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    // marginHorizontal: 5,
  },
  text: {
    fontSize: 14,
  },
});
