import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Uncheck from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontText} from '../utlis/CustomFont';

const Amentity = ({labelText}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
          {isChecked ? (
            <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
          ) : (
            <Uncheck name="checkbox-blank-outline" size={25} />
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Personalized welcome gifts</Text>
      </View>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
          {isChecked ? (
            <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
          ) : (
            <Uncheck name="checkbox-blank-outline" size={25} />
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Snack baskets with local flavor.</Text>
      </View>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
          {isChecked ? (
            <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
          ) : (
            <Uncheck name="checkbox-blank-outline" size={25} />
          )}
        </TouchableOpacity>
        <Text style={styles.text}>WI-FI</Text>
      </View>
    </View>
  );
};

export default Amentity;

const styles = StyleSheet.create({
  container: {
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
});
