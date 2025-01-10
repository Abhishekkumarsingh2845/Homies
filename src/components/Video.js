import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';

const Video = () => {
  const videoarray = new Array(3).fill(null);
  return (
    <View style={styles.container}>
     <Text style={styles.amenttxt}>Virtual Videos</Text>
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: "flex-start",marginTop:5,marginLeft:5}}>
        {videoarray.map((_, index) => (
          <Image
            key={index}
            source={Img.newvideoicon}
            style={{width: 105, height: 85, borderRadius: 10,marginLeft:10}}
          />
        ))}
      </TouchableOpacity>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    // marginTop:10
  },
  amenttxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    marginLeft:10,
    marginTop:10,
    // marginVertical: 10,
  },
});
