import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import { FontText } from '../utlis/CustomFont';

const PermonthRent = ({rentAmount}) => {
  const rentType = {
    Monthly : "Month",
    Yearly : 'Year'
  }
  return (
    <View style={styles.container}>
      <Text style={styles.rentText}>Rent</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>₹ {rentAmount?.amount || 0}</Text>
        <Text style={styles.perMonthText}>Per {rentType[rentAmount?.planDuration]}</Text>
      </View>
    </View>
  );
};

export default PermonthRent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,

  },
  rentText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  amountContainer: {
    // flexDirection: 'column',
    alignItems: 'flex-start',
    // backgroundColor:"red",
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.btnclr,
  },
  perMonthText: {
    fontSize: 14,
    color: '#000000',
    fontFamily:FontText.light,

  },
});
