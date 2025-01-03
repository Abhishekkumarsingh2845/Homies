import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';

const Download = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txt}>Download</Text>
    </TouchableOpacity>
  );
};

export default Download;

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:"#FFB83A",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:20,
        height:40,
        borderRadius:10,
        marginTop:5,
    },
    txt:
    {
        fontSize:12,
        fontFamily:FontText.medium,
        color:Color.white,
    }
});
