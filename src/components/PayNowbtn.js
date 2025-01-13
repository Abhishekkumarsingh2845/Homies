import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';
import {useNavigation} from '@react-navigation/native';

const PayNowbtn = ({msg = 'Pay Now'}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('PaymentNavigator', {screen: 'PaymentForm'})
      }>
      <Text style={styles.txt}>{msg}</Text>
    </TouchableOpacity>
  );
};

export default PayNowbtn;

const styles = StyleSheet.create({
  container: {
    // width:100,
    // height:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#257500',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  txt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: Color.white,
  },
});
