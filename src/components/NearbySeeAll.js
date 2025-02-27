import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import { FontText } from '../utlis/CustomFont';

const NearbySeeAll = ({OnPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nearby}>Nearby your location</Text>
      <TouchableOpacity onPress={OnPress}>
        <Text style={styles.seeall}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NearbySeeAll;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 5,
  },
  nearby: {
    fontSize: 14,
    fontWeight: '700',
    color: '#101010',
  },
  seeall: {
    fontSize: 14,
    color: Color.clr73,
    fontFamily: FontText.bold
  },
});
