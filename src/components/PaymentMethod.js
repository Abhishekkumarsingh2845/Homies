import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Uncheck from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontText } from '../utlis/CustomFont';

const PaymentMethod = ({labelText}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
        {isChecked ? (
          <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
        ) : (
          <Uncheck name="checkbox-blank-outline" size={25} />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>{labelText}</Text>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: '#737373',
    fontFamily:FontText.medium,
  },
});
