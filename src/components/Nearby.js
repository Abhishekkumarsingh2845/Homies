import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {Img} from '../utlis/ImagesPath';
import { FontText } from '../utlis/CustomFont';

const Nearby = ({name,bgcolor}) => {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:bgcolor}]}>
      <View style={styles.circlecontianer}>
        <Image source={Img.buildingicon} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Nearby;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 45,
    width: 120,
    paddingHorizontal: 10,
    paddingVertical: 5,
    // width: '100%',
    // height: 25,
    // backgroundColor: '#F3D5F9',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
    // justifyContent:"center",
    justifyContent:"space-around",
    marginLeft:10
  },
  name: {
    fontSize:10,
    
    fontWeight:FontText.medium,
    color: '#DB22FF',
    
  },
  circlecontianer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
