import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';

const PermonthRent = ({
  rent = 'Rent',
  amount = '₹6,500',
  period = 'Per Month',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rentText}>{rent}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{amount}</Text>
        <Text style={styles.perMonthText}>{period}</Text>
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
    marginTop: 140,
  },
  rentText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  amountContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.btnclr,
  },
  perMonthText: {
    fontSize: 14,
    color: 'gray',
  },
});
