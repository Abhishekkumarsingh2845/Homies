import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Color } from '../utlis/Color';
import { useNavigation } from '@react-navigation/native';

const PrimaryBtn = ({ txt, destination, clr=Color.white, bgcolor, brdcolor, brdwdth,mgntop,mrgnbm }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    if (destination) {
      navigation.navigate(destination);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: bgcolor,
          borderColor: brdcolor,
          borderWidth: brdwdth, // Dynamically set border width
          marginTop:mgntop,
          marginBottom:mrgnbm
        },
      ]}
      onPress={handleNavigation}
    >
      <Text style={[styles.txt, { color: clr }]}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
  },
  txt: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
