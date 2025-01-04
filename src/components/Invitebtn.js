import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import { FontText } from '../utlis/CustomFont';

const Invitebtn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtstyle}>Invite</Text>
    </View>
  );
};

export default Invitebtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.btnclr,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal:10,
  },
  txtstyle:
  {
    fontSize:16,
    fontFamily:FontText.medium,
    color:"white"
  }
});
