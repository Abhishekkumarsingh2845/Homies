import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Color } from '../utlis/Color';
import { FontText } from '../utlis/CustomFont';

const PrimaryTxtInp = ({ value,
  placeholder,
  error,
  setValue,
  name,
  label,
  mrgtop,
  maxlen, 
  keyboardType}) => {


  const onChange = (value) => {
    setValue(name, value);


  }
  return (
    <>
      <View style={[styles.container, { marginTop: mrgtop }]}>
        <TextInput
          value={value}
          onChangeText={onChange}
          style={styles.txtipt}
          placeholder={placeholder}
          placeholderTextColor={Color.clr87}
          keyboardType={keyboardType}
          maxLength={maxlen}
        />

      </View>
      {
        error && <Text style={styles.errorText} >{error}</Text>
      }
    </>
  );
};

export default PrimaryTxtInp;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingVertical: Platform.OS === 'ios' ? 14 : 2,
    borderColor: '#E6E6E6',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  txtipt: {
    width: '100%',
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 18,
    color: Color.clr87,
  },
  errorText: {
    color: "red",
    fontSize: 11,
    textTransform: 'uppercase'
  },
});
