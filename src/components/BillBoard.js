import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';

const BillBoard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Img.noitificationicon}
        style={{width: 50, height: 50, resizeMode: 'contain'}}
      />
      <View style={styles.commentcontainer}>
      <Text style={styles.admintxt}>Admin</Text>
        <Text>Lorem Ipsum has been the industry's </Text>
        <Text>standard dummy text ever since the </Text>
        <Text style={styles.seemoretxt}>see more...</Text>
      </View>
    </View>
  );
};

export default BillBoard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:20,
  },
  commentcontainer: {
    marginLeft: 10,
  },
  admintxt:
  {
    fontSize:14,
    fontFamily:FontText.medium,
    color:Color.black,
  },
  seemoretxt:
  {
    fontSize:12,
    fontFamily:FontText.medium,
    color:Color.black,
  }

});
