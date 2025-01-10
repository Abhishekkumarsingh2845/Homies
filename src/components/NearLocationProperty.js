import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';

const NearLocationProperty = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={Img.morehostelicon} style={{width: 100, height: 80,borderRadius:10}} />
      <View style={styles.txtcontainer}>
      <Text style={styles.hosteltxt}>Asteria hostel</Text>
      <Text style={styles.addresstxt}>Ram Nagar , NT 0872, Katraj</Text>
      <Text style={styles.rentcontainer}>Rent - 5K/Month</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearLocationProperty;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:"#FFFFFF",
    padding:10,
    borderRadius:10,
    // marginTop:10,
  },
  txtcontainer:
  {
    marginLeft:15,
  },
  hosteltxt:
  {
    fontSize:14,
    fontFamily:FontText.medium,
    color:Color.black,
  },
  addresstxt:
  {
    fontSize:12,
    fontFamily:FontText.medium,
    color:Color.clr87,
    marginTop:5,
  },
  rentcontainer:
  {
    fontSize:14,
    fontFamily:FontText.bold,
    color:Color.black,
    marginTop:5,
  }
});
