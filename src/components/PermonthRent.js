import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';

const PermonthRent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.rentText}>Rent</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>₹6,500</Text>
        <Text style={styles.perMonthText}>Per Month</Text>
      </View>
    </View>
  );
};

export default PermonthRent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Align children horizontally
    justifyContent: 'space-between', // Distribute children evenly across the container
    alignItems: 'center',
    marginTop: 10, // Vertically align elements in the center
  },
  rentText: {
    fontSize: 14, // Customize the font size for "Rent"
    fontWeight: 'bold', // Make "Rent" text bold
    color: '#000', // Set color to black
  },
  amountContainer: {
    flexDirection: 'column', // Stack the texts vertically
    alignItems: 'flex-end', // Align text to the right
  },
  amountText: {
    fontSize: 18, // Customize the font size for the rent amount
    fontWeight: 'bold', // Make the amount bold
    color: Color.btnclr, // Set a custom color for the amount (e.g., tomato red)
  },
  perMonthText: {
    fontSize: 14, // Customize the font size for "Per Month"
    color: 'gray', // Change the color of the "Per Month" text to gray
  },
});
