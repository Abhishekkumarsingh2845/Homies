
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images, Img} from '../../utlis/ImagesPath';

const HostelRentsucess = ({navigation}) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.navigate('HomeNavigator', {
//         screen: 'Home',
//       });
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [navigation]);
  return (
    <ImageBackground
      style={styles.container}
      source={Img.hostelrentouticon}
      resizeMode="cover"></ImageBackground>
  );
};

export default HostelRentsucess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf:"center",
  },
});
