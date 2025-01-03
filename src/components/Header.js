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

const Header = ({Img1}) => {
  return (
    <ImageBackground source={Img.headerbg} style={styles.container}>
      <StatusBar backgroundColor={'#010101'} barStyle={'light-content'}   />
      <View style={styles.logocontainer}>
        <View style={styles.leftcontinaer}>
          <TouchableOpacity>
            <Image source={Img1} style={styles.drawicon} />
          </TouchableOpacity>

          <Image source={Img.primarylogo} style={styles.logoicon} />
        </View>
        <View style={styles.rightcontinaer}>
          <TouchableOpacity>
            <Image source={Img.lcn} style={styles.location} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Img.hrt} style={styles.heart} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Img.bll} style={styles.bell} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    // backgroundColor:"red"
  },
  leftcontinaer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  drawicon: {
    width: 35,
    height: 35,
  },
  logoicon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  logocontainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  location: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    // marginLeft:10,
  },
  heart: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  bell: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  rightcontinaer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
});
