import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';

const CatergoryComponenet = ({Imgsource,toptxt,bottomtxt}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={Imgsource} style={styles.imgstyle} />
      <View style={{marginTop:5}}/>
      <Text style={styles.txtstyle}>{toptxt}</Text>
      <Text style={styles.txtstyle}>{bottomtxt}</Text>
    </TouchableOpacity>
  );
};

export default CatergoryComponenet;

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    alignItems:"center",
  },
  imgstyle: {
    width: 60,
    height: 60,
  },
  txtstyle:
  {
    fontSize:12,
    fontFamily:FontText.light,
    lineHeight:16,
    color:"#FF9457"
  }
});