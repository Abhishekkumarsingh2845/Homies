import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const PaymenttxtInpt = ({placeholder=" 0101  / 1100 / 1100 / 1234", width="100%"}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.txtinpt, {width: width}]} // Use dynamic width
        placeholder={placeholder}
        placeholderTextColor={Color.clr87}
      />
    </View>
  );
};

export default PaymenttxtInpt;

const styles = StyleSheet.create({
  container: {},
  txtinpt: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    color: Color.clr87,
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontText.medium,
  },
});
