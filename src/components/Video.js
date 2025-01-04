import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';

const Video = () => {
  const videoarray = new Array(3).fill(null);
  return (
    <View style={styles.container}>
      <Text>Virtual Videos</Text>
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around',marginTop:10}}>
        {videoarray.map((_, index) => (
          <Image
            key={index}
            source={Img.videoicon}
            style={{width: 90, height: 70, borderRadius: 10}}
          />
        ))}
      </TouchableOpacity>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    marginTop:10
  },
});
