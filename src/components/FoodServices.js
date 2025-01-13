import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';
import {useNavigation} from '@react-navigation/native';

const FoodServices = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('HomeTabNavigator', {
          screen: 'FoodMenu',
        })
      }>
      <Text style={styles.daytxt}>Monday</Text>
      <View style={styles.breakfastcontainer}>
        <Text style={styles.breakfasttxt}>Breakfast</Text>
        <Text style={styles.foodtxt}>Aloo paratha</Text>
      </View>
      <View style={styles.dinnercontainer}>
        <Text style={styles.timingtxt}>Timing</Text>
        <Text style={styles.fixedtimetxt}>7:30 - 9:00 AM</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodServices;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Color.btnclr,
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
