import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const ComplaintTxtInpt = ({
  height: heightvalue, 
  multiline = false, 
  bgcolor = '#FFFFFF', 
  placeholder = 'Text Here.....' // Default placeholder
}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgcolor}]}>
      <TextInput
        placeholder={placeholder} // Dynamic placeholder
        placeholderTextColor={Color.clr73}
        style={[styles.txtinptsty, {height: heightvalue}]}
        multiline={multiline} // Dynamic multiline prop
      />
    </View>
  );
};

export default ComplaintTxtInpt;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: '100%',
  },
  txtinptsty: {
    fontSize: 14,
    fontFamily: FontText.light,
    textAlignVertical: 'top', // Aligns placeholder and text to the top
  },
});
