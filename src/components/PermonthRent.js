import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const PermonthRent = ({
  rent = 'Rent',
  // amount = '₹6,500',
  PermonthRent,
  period = 'Per Months',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rentText}>{rent}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>
          {PermonthRent?.property?.sharing?.[0]?.details?.[0]?.amount ||
            'no data'}
        </Text>
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
    fontFamily: FontText.light,
  },
});
