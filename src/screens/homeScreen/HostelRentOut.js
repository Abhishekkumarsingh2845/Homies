import {Image, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {Img} from '../../utlis/ImagesPath';
import { Color } from '../../utlis/Color';

const HostelRentOut = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('FilterScreen');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigation])
  return (
    <View style={styles.container}>
        {/* <StatusBar  barStyle={"light-content"} backgroundColor={"red"} /> */}
        {/* <SafeAreaView/> */}
      <Image source={Img.hostelrentouticon} style={styles.img} />
    </View>
  );
};

export default HostelRentOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
