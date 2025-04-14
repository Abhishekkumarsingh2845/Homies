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
import {useNavigation} from '@react-navigation/native';

const SecondaryHeader = ({
  detailtxt,
  gobackImage,
  onPress,
  notificationIcon,
  share,
  tintColor,
}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Img.headerbg} style={styles.container}>
      <StatusBar backgroundColor={'#010101'} barStyle={'light-content'} />

      <TouchableOpacity style={styles.subcontainer} onPress={onPress}>
        <Image source={gobackImage} style={styles.gobackstyle} />
        <Text style={styles.textstyle}>{detailtxt}</Text>
        {/* <Image source={Img.bellicon} style={styles.imgcontainer} /> */}
        <TouchableOpacity style={{position: 'absolute', right: 50}}>
          <Image source={share} style={styles.imgcontainer} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{position: 'absolute', right: 10}}
          onPress={() => navigation.navigate('Notification')}>
          <Image
            source={notificationIcon}
            style={[styles.imgcontainer, {tintColor}]}
          />
        </TouchableOpacity>
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
  imgcontainer: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
});
