import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LeftArrow from 'react-native-vector-icons/AntDesign';
import { FontText } from '../utlis/CustomFont';

const CommonHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <LeftArrow name="arrowleft" size={20} />
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: FontText.bold,
    lineHeight: 20,
  },
});
