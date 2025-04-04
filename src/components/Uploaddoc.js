import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const Uploaddoc = ({ value, onchgtxt, placeholder }) => {
  return (
    <View style={{ width: '100%', backgroundColor: 'white' }}>
      <TextInput value={value} onChangeText={onchgtxt} placeholder={placeholder} style={{fontSize:18,color:"black"}} />
    </View>
  );
};

export default Uploaddoc;

const styles = StyleSheet.create({});
