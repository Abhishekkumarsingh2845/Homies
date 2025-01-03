import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import Download from './Download';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';

const Transactiondetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image source={Img.beautyicon} style={styles.imgstyle} />
        <View style={styles.successmsgcontainer}>
          <Text style={styles.rentpaidtxt}>Rent paid Successful</Text>
          <Text style={styles.datetxt}>08 Aug, 2024, 11:49 AM</Text>
        </View>
      </View>
      <Download />
    </View>
  );
};

export default Transactiondetail;

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgstyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop:20,
  },
  successmsgcontainer:
  {
    marginTop:5,
    marginLeft:10
  },
  rentpaidtxt:
  {
    fontSize:12,
    fontFamily:FontText.light,
    color:Color.clr73,

  },
  datetxt:
  {
    fontSize:10,
    fontFamily:FontText.light,
    color:Color.clr73,

  }
});
