import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';

const PrimaryTxtInp = ({plchldtxt,mrgtop}) => {
  return (
    <View style={[styles.container,{marginTop:mrgtop}]}>
      <TextInput
        style={styles.txtipt}
        placeholder={plchldtxt}
        placeholderTextColor={"Enter your"}
      />
    </View>
  );
};

export default PrimaryTxtInp;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingVertical: Platform.OS==="ios"?14:2,
    borderColor: '#E6E6E6',
    borderRadius: 5,
    paddingHorizontal:5,
    
  },
  txtipt: {
    width: '100%',
  },
});