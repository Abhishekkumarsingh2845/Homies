import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';

const Aligntext = ({detailtxt}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop:10,
      }}>
      <View
        style={{
          width: 3,
          height: 3,
          backgroundColor: '#7D7D7D',
          borderRadius: 10,
          marginTop:8
        }}
      />
      <Text style={{marginLeft: 5,fontSize:12,fontFamily:FontText.light,color:Color.clr73,lineHeight:22}}>{detailtxt}</Text>
    </View>
  );
};

export default Aligntext;

const styles = StyleSheet.create({});
