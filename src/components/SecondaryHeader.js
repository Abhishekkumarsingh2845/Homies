import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import {FontText} from '../utlis/CustomFont';

const SecondaryHeader = ({detailtxt, gobackImage, onPress}) => {
  return (
    <ImageBackground source={Img.headerbg} style={styles.container}>
      <StatusBar backgroundColor={'#010101'} barStyle={'light-content'} />
      <TouchableOpacity style={styles.subcontainer} onPress={onPress}>
        {/* Dynamic Image Source */}
        <Image source={gobackImage} style={styles.gobackstyle} />
        <Text style={styles.textstyle}>{detailtxt}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SecondaryHeader;

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'flex-end',
  },
  subcontainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  gobackstyle: {
    tintColor: 'white',
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  textstyle: {
    fontSize: 16,
    fontFamily: FontText.bold,
    lineHeight: 20,
    marginLeft: 10,
    color: '#FFFFFF',
  },
});
