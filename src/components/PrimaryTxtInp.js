import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const PrimaryTxtInp = ({plchldtxt, mrgtop, val, onChangeText,maxlen,keytype}) => {
  return (
    <View style={[styles.container, {marginTop: mrgtop}]}>
      <TextInput
        value={val}
        onChangeText={onChangeText}
        style={styles.txtipt}
        placeholder={plchldtxt}
        placeholderTextColor={Color.clr87}
        keyboardType={keytype}
        maxLength={maxlen}
      />
    </View>
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
});
