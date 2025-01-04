import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Price = () => {
  return (
    <View style={styles.container}>
      <Text>Price, $</Text>
      <View style={styles.maxmincontainer}>
        <TextInput placeholder="Min" style={styles.minplacehldcontainer} />
        <TextInput placeholder="Max" style={styles.maxplacehldcontainer} />
      </View>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    marginTop: 20,
    elevation: 5,
    borderRadius: 10,
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84,
  },
  minplacehldcontainer: {
    backgroundColor: '#FFFFFF',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 25,
    borderRadius: 5,
    borderColor: '#DDE2E4',
    borderWidth: 1,
  },
  maxplacehldcontainer:
  {
    marginLeft:10,
    backgroundColor: '#FFFFFF',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 25,
    borderRadius: 5,
    borderColor: '#DDE2E4',
    borderWidth: 1,
  },
  maxmincontainer:
  {
    flexDirection:"row"
  }
});
