import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import SecondaryHeader from './SecondaryHeader';
import {Img} from '../utlis/ImagesPath';
import Accounticon from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Nearby from './Nearby';
import Location from 'react-native-vector-icons/Entypo';
import {FontText} from '../utlis/CustomFont';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import {ScreenDimensions} from '../utlis/DimensionApi';
const PropertyInfoCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('PaymentHomeForm')}>
      <View style={styles.imgcontainer}>
        <View style={styles.largehosteimgstyle}>
          <Image source={Img.hstdetail} style={styles.hstdetailstyle} />
        </View>

        <View style={styles.subimagecontainer}>
          <Image
            source={Img.morehostelicon}
            style={styles.morehosteliconstyle}
          />
          <ImageBackground
            source={Img.morehostelicon}
            style={styles.mmorehostelicon}>
            <Text style={{alignSelf: 'center', fontSize: 20, color: 'white'}}>
              +5
            </Text>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.idcontainer}>
        <View style={styles.id}>
          <Text style={styles.idtxt}>ID : Boy 001</Text>
          <Text style={styles.hostelnametxt}>
            Asteria Hostel | Noida Sector 52
          </Text>
        </View>
        <Image source={Img.hostellogoicon} style={styles.hostellogoiconstyle} />
      </View>
      <View>
        <Text style={styles.wardendetailtxt}>Warden manager details</Text>
        <View style={styles.persondetailcontainer}>
          <View style={styles.namedetailcontainer}>
            <Accounticon
              name="account-circle-outline"
              size={18}
              Color={Color.clr87}
            />
            <Text style={styles.namedetailtxt}>Rohit Kumar</Text>
          </View>
          <View style={styles.phonedetailcontainer}>
            <PhoneIcon name="phone-outline" size={18} color={'#0094FD'} />
            <Text style={styles.phoneno}>+917654238976</Text>
          </View>
        </View>
        <View style={styles.nearbyplacescontainer}>
          <View style={styles.nearbycontainer}>
            <Location name="location-pin" size={18} color={'#000000'} />
            <Text style={styles.nearbytxt}>Nearby</Text>
          </View>
          <Nearby name={'Fortis Hospital'} bgcolor={'#F3D5F9'} />
          <Nearby name={'Bus Stand'} bgcolor={'#FFE3B1'} />
        </View>
        <View>
          <Text style={styles.overviewtxt}>Overview</Text>
          <View style={styles.overviewline}></View>
          <View style={styles.overviewdetailcontainer}>
            <View style={styles.propertytransporaty}>
              <Text style={styles.propertytypetxt}>Property Type</Text>
              <Text style={styles.properttnametxt}>Boys Hostel</Text>
            </View>
            <View>
              <Text style={styles.hosteltxt}>Hostel Transportation</Text>
              <Text style={styles.hostelcab}>Hostel Cab</Text>
            </View>
          </View>
          <View style={styles.foodfacilitycontainer}>
            <Text style={styles.foodfaciltytxt}>Food facility</Text>
            <Text style={styles.vegnonvegtxt}>Available veg/Non veg </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyInfoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    elevation: 5,
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: {width: 0, height: 2}, // Shadow position (iOS)
    shadowOpacity: 0.2, // Shadow transparency (iOS)
    shadowRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  largehosteimgstyle: {},
  hstdetailstyle: {
    width: ScreenDimensions.screenWidth * 0.55,
    height: ScreenDimensions.screenHeight * 0.25,
    resizeMode: 'stretch',
    // backgroundColor: 'red',
    // resizeMode: 'cover',
  },

  morehosteliconstyle: {
    width: ScreenDimensions.screenWidth * 0.22,
    height: ScreenDimensions.screenHeight * 0.12,
    resizeMode: 'cover',
  },
  mmorehostelicon: {
    marginTop: 10,
    width: ScreenDimensions.screenWidth * 0.22,
    height: ScreenDimensions.screenHeight * 0.12,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subimagecontainer: {},
  imgcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  idcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hostellogoiconstyle: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
    // backgroundColor:"red"
  },
  persondetailcontainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  namedetailcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phonedetailcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
  },
  nearbycontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nearbyplacescontainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  overviewline: {
    marginTop: 5,
    borderColor: '#BEC1C4',
    borderWidth: Platform.OS == 'ios' ? 0.5 : 0.5,
  },
  propertytransporaty: {},
  overviewdetailcontainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  idtxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    lineHeight: 18,
    color: '#101010',
  },
  hostelnametxt: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: Color.clr87,
    lineHeight: 16,
  },
  wardendetailtxt: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    lineHeight: 18,
  },
  namedetailtxt: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: Color.clr87,
    lineHeight: 18,
  },
  phoneno: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: '#0094FD',
    lineHeight: 18,
  },
  nearbytxt: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: '#000000',
    lineHeight: 16,
  },
  overviewtxt: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: Color.clr87,
    lineHeight: 16,
  },
  propertytypetxt: {
    fontSize: 10,
    fontFamily: FontText.medium,
    color: Color.clr87,
    lineHeight: 16,
  },
  properttnametxt: {
    fontSize: 10,
    fontFamily: FontText.medium,
    color: Color.black,
    lineHeight: 16,
  },
  hosteltxt: {
    fontSize: 10,
    fontFamily: FontText.medium,
    color: Color.clr87,
    lineHeight: 16,
  },
  hostelcab: {
    fontSize: 10,
    fontFamily: FontText.medium,
    color: Color.black,
    lineHeight: 16,
  },
  foodfaciltytxt: {
    fontSize: 10,
    fontFamily: FontText.medium,
    color: Color.clr87,
    lineHeight: 16,
  },
  vegnonvegtxt: {
    fontSize: 10,
    fontFamily: FontText.medium,
    color: Color.black,
    lineHeight: 16,
  },
  foodfacilitycontainer: {
    marginTop: 10,
  },
});
