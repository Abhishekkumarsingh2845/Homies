import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const ComplaintTxtInpt = ({
  value , 
  placeholder,
  error,
  setValue,
  name,
  label,
  height,
  multiline
}) => {

  const onChange = (value) => {
    setValue(name, value);


}
  return (
    <>
    <Text style={styles.label}>{label}</Text>
    <View style={[styles.container, {backgroundColor: "#FFFFFF"}]}>
      
      <TextInput
        placeholder={placeholder} // Dynamic placeholder
        placeholderTextColor={Color.clr73}
        style={[styles.txtinptsty, {height: height}]}
        multiline={multiline} // Dynamic multiline prop
        value={value}
        onChangeText={onChange}
        />
    </View>
    {
      error &&     <Text style={styles.errorText} >{error}</Text>
    }


        </>
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
  label: {
    fontSize: 16,
    fontFamily: FontText.medium,
    marginTop: 5,

    color: '#333',
  },
  errorText: {
    color: "red",
    fontSize: 11,
    textTransform: 'uppercase'
},
});
