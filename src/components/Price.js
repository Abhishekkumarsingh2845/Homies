import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontText } from '../utlis/CustomFont';

const Price = ({setFilterData}) => {
  const [minMax , setMinMax] = useState({
    min : null,
    max : null
  })

  // useEffect(() =>{
  //   setFilterData(prev => ({
  //     ...prev,
  //     minPrice : minMax.min,
  //     maxPrice :minMax.max
  //   }))
  // } , [minMax])

  return (
    <View style={styles.container}>
      <Text style={styles.pricetxt}>Price,₹</Text>
      <View style={styles.maxmincontainer}>
        <TextInput placeholder="Min" placeholderTextColor={"#9AA6AC"} style={styles.minplacehldcontainer}  keyboardType='number-pad' value={minMax.min} onChangeText={(text) => {setMinMax(prev => ({...prev , min : text}))}}/>
        <TextInput placeholder="Max" placeholderTextColor={"#9AA6AC"} style={styles.maxplacehldcontainer}  keyboardType='number-pad' value={minMax.max} 
        onChangeText={(text) => {setMinMax(prev => ({...prev , max : text}))}}/>
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
    color:'black',
    
    justifyContent: 'center',
    padding: 5,
    height: 30,
    borderRadius: 5,
    borderColor: '#DDE2E4',
    borderWidth: 1,
    marginVertical:5,
  },
  maxplacehldcontainer:
  {
    color:'black',

    marginLeft:10,
    backgroundColor: '#FFFFFF',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 30,
    borderRadius: 5,
    borderColor: '#DDE2E4',
    borderWidth: 1,
    marginVertical:5,
  },
  maxmincontainer:
  {
    flexDirection:"row"
  },
  pricetxt:
  {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: '#252C32',
  }
});
