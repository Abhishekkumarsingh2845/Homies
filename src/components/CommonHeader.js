import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LeftArrow from 'react-native-vector-icons/AntDesign';
import {FontText} from '../utlis/CustomFont';
import { useNavigation } from '@react-navigation/native';

const CommonHeader = ({title}) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>
      <LeftArrow name="arrowleft" size={20} color={"black"} />
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:10,
  },
  txt: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: FontText.bold,
    lineHeight: 20,
    color:"black"
  },
});
