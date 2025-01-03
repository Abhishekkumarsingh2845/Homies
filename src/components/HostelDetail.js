import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import {Color} from '../utlis/Color';
import RoomAvailability from './RoomAvailability';
import { useNavigation } from '@react-navigation/native';

const HstDetail = ({mrntop, showRoomAvailability}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, {marginTop: mrntop}]}
      onPress={() => navigation.navigate('AllHome')}>
      <ImageBackground source={Img.hstdetail} style={styles.img}>
        {showRoomAvailability && (
          <RoomAvailability
            text={'No More Room Available'}
            backgroundColor={Color.noroomclr}
            textColor={Color.white}
          />
        )}
      </ImageBackground>
      <View style={styles.detailcontainer}>
        <View style={styles.left}>
          <Text style={styles.person}>Girls-001</Text>
          <View style={styles.addresscontainer}>
            <Image source={Img.locationdetail} style={styles.locationicon} />
            <Text style={styles.address}>Ram Nagar , NT 0872, Katraj</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Image source={Img.verifiedicon} style={styles.verifiedIconStyle} />
          <Image
            source={Img.hrt}
            tintColor={'black'}
            style={styles.hrtIconStyle}
          />
        </View>
      </View>
      <View style={styles.lineStyle}></View>
      <View style={styles.rentratingcontainer}>
        <View style={styles.rentcontainer}>
          <Text>₹ Rent - 5K/Month</Text>
        </View>
        <View style={styles.ratingstarcontainer}>
          <Image
            source={Img.ratingstaricon}
            style={styles.ratingstariconcontainer}
          />
          <Text>4.1</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HstDetail;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    elevation: 8,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: {width: 0, height: 2}, // Shadow position (iOS)
    shadowOpacity: 0.2, // Shadow transparency (iOS)
    shadowRadius: 4, // Shadow blur radius (iOS),
    paddingHorizontal: 10,
  },
  img: {
    width: '100%',
    // resizeMode:"contain"
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 120,
    marginVertical: 10,
    borderRadius: 10,
  },
  detailcontainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationicon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#545151',
  },
  addresscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  left: {
    marginVertical: 10,
  },
  person: {
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  address: {
    marginLeft: 5,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedIconStyle: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  hrtIconStyle: {
    width: 23,
    height: 23,
  },
  lineStyle: {
    borderWidth: 0.3,
    color: Color.lineclr,
  },
  rentcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingstarcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingstariconcontainer: {
    width: 20,
    height: 20,
  },
  rentratingcontainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  noroomiconStyle: {
    width: 50,
    height: 100,
    // resizeMode:"contain",
    backgroundColor: 'green',

    // position:"absolute",
    // top:50,right:80,
  },
  noroomcontainer: {
    backgroundColor: Color.noroomclr,
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  noroomtxt: {
    color: Color.white,
  },
});
