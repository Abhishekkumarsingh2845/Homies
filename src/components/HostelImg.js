import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {Img} from '../utlis/ImagesPath';

const HostelImg = () => {
  return (
    <View>
      <Image source={Img.intro} style={styles.img} />
      <Image source={Img.hstimgage} style={styles.img} />
      <Image source={Img.hstimgage} style={styles.img} />
    </View>
  );
};

export default HostelImg;

const styles = StyleSheet.create({
  container: {
    height: 200, // Set a fixed height for the Swiper
    width: '100%', // Make it full width
  },
  img: {
    width: '100%', // Make the image fill the Swiper's width
    height: '100%', // Make the image fill the Swiper's height
    resizeMode: 'cover',
    backgroundColor: 'red', // Adjust the image to cover the Swiper area
  },
});
