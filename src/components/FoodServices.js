import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';
import {useNavigation} from '@react-navigation/native';

const FoodServices = ({fooddetail, data, bgcolor = 'white'}) => {
  const navigation = useNavigation();
  console.log('food', fooddetail);
  console.log('food detail', fooddetail);
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: bgcolor}]}
      onPress={() =>
        navigation.navigate('HomeTabNavigator', {
          screen: 'FoodMenu',
        })
      }>
      <Text style={styles.daytxt}>
        {fooddetail?.foodDetails[0]?.week || 'no data'}
      </Text>
      <View style={styles.breakfastcontainer}>
        <Text style={styles.breakfasttxt}>
          {fooddetail?.foodDetails[0]?.title || 'no data'}
        </Text>
        <Text style={styles.foodtxt}>
          {fooddetail?.foodDetails[0]?.foodItems[0] || 'no data'}
        </Text>
      </View>
      <View style={styles.dinnercontainer}>
        <Text style={styles.timingtxt}>Timing</Text>
        <Text style={styles.fixedtimetxt}>
          {fooddetail?.foodDetails[0]?.startTime ?? ''}-{' '}
          {fooddetail?.foodDetails[0]?.endTime ?? ''}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodServices;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    alignItems: 'center',
    paddingVertical: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  breakfastcontainer: {},
  dinnercontainer: {},
  daytxt: {
    fontSize: 14,
    fontFamily: FontText.light,
    color: Color.white,
  },
  breakfasttxt: {
    fontSize: 14,
    fontFamily: FontText.bold,
    color: Color.white,
  },
  foodtxt: {
    fontSize: 14,
    fontFamily: FontText.light,
    color: Color.white,
  },
  timingtxt: {},
  timingtxt: {
    fontSize: 14,
    fontFamily: FontText.bold,
    color: Color.white,
  },

  fixedtimetxt: {
    fontSize: 14,
    fontFamily: FontText.light,
    color: Color.white,
  },
});
