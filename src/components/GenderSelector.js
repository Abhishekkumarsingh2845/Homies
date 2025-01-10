import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontText} from '../utlis/CustomFont';
import Uncheck from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
const GenderSelector = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gendertxt}>Gender</Text>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
          {isChecked ? (
            <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
          ) : (
            <View style={styles.uncheckbox}></View>
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Boys</Text>
      </View>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
          {isChecked ? (
            <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
          ) : (
            <View style={styles.uncheckbox}></View>
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Girls.</Text>
      </View>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
          {isChecked ? (
            <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
          ) : (
            <View style={styles.uncheckbox}></View>
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Co-living</Text>
      </View>
    </View>
  );
};

export default GenderSelector;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    marginTop: 20,
    elevation: 5,
    // flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84,
  },
  checkbox: {
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: '#737373',
    fontFamily: FontText.medium,
  },
  subcontainer: {
    flexDirection: 'row',
  },
  gendertxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: '#252C32',
  },
  uncheckbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 5,
    BorderColor: '#B0BABF',
  },
});
