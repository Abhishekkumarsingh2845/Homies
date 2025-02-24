import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const Seater = ({setFilterData}) => {
  const [value , setValue] = useState(0)

  useEffect(() =>{
    const data = {
      1 : 'One Sharing',
      2 : 'Double Sharing',
      3 : 'Three Sharing',
      4 :  "Four Sharing",
      5 : 'Five Sharing'
    }
    if(value){
      setFilterData(prev => ({
        ...prev,
        minSharing : data[value]
      }))
      // filterFunc({
      //   minSharing : data[value]
      // })
    }
  },[value])
  return (
    <View style={styles.container}>
      <Text style={styles.titletxt}>Seater</Text>
      <View style={styles.textContainer}>
        <Text style={styles.mintxt}>Min</Text>
        <Text style={styles.maxtxt}>Max</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>0</Text>

        <Slider
          style={{width: 280, height: 40}}
          minimumValue={0}
          maximumValue={5}
          thumbTintColor="#FFB83A"
          minimumTrackTintColor="#FFB83A"
          maximumTrackTintColor="#FFB83A"
          onSlidingComplete = {(data) => {
              setValue(data)
          }}
          step={1}
          value={value}
        />

        <Text>{value}</Text>
      </View>
    </View>
  );
};

export default Seater;

const styles = StyleSheet.create({
  container: {
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
  textContainer: {
    flexDirection: 'row', // Places Min and Max in a horizontal row
    justifyContent: 'space-between', // Distributes space between them
    marginTop: 10, // Adds space above the row
    paddingHorizontal: 15, // Adds padding on both sides
    alignItems: 'center',
  },
  titletxt: {
    marginHorizontal: 10,
    fontSize: 14,
    color: Color.black,
    fontFamily: FontText.medium,
  },
  mintxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    lineHeight: 24,
    Color: '#575555',
  },
  maxtxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    lineHeight: 24,
    Color: '#575555',
  },
});
