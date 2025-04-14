import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('Login');
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);

  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} />
      <Video
        source={require('../../assets/videos/pp.mp4')}
        style={styles.video}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
