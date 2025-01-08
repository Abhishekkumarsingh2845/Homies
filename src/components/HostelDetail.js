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
import {useNavigation} from '@react-navigation/native';
import {FontText} from '../utlis/CustomFont';

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
          <TouchableOpacity onPress={()=>navigation.navigate("BookMark")}>
          <Image
            source={Img.hrt}
            tintColor={'black'}
            style={styles.hrtIconStyle}
          />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lineStyle}></View>
      <View style={styles.rentratingcontainer}>
        <View style={styles.rentcontainer}>
          <Text style={styles.rentamounttxt}>
            ₹ Rent - 5K/<Text style={styles.month}>Month</Text>
          </Text>
        </View>
        <View style={styles.ratingstarcontainer}>
          <Image
            source={Img.ratingstaricon}
            style={styles.ratingstariconcontainer}
          />
          <Text style={styles.ratingstaramounttxt}>4.1</Text>
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
    // overflow:"hidden"

  },
  img: {
    width: '100%',
    // resizeMode:"contain"
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 120,
    marginVertical: 10,
    borderRadius:10,

    overflow:'hidden'
 
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
    fontSize: 14,
    color: Color.black,
    fontWeight: FontText.medium,
  },
  rentamounttxt: {
    fontSize: 16,
    color: Color.black,
    fontWeight: FontText.medium,
    lineStyle: 18,
  },
  month: {
    fontSize: 14,
    color: 'grey',
    fontWeight: FontText.medium,
    lineStyle: 18,
  },
  address: {
    marginLeft: 5,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedIconStyle: {
    width: 18,
    height: 18,
    marginRight: 15,
  },
  hrtIconStyle: {
    width: 20,
    height: 20,
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
    width: 15,
    height: 15,
  
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
  ratingstaramounttxt: {
    fontSize: 14,
    fontWeight: FontText.bold,
    color: Color.black,
    marginLeft: 5,
  },
});
