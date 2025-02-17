import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {Img} from '../utlis/ImagesPath';
import RoomAvailability from './RoomAvailability';
import {FontText} from '../utlis/CustomFont';
import {useNavigation} from '@react-navigation/native';

const AllHostelDetail = ({hostel, style}) => {
  const navigation = useNavigation();
  const ratingstartdata = [
    {
      id: 1,
      Imge: Img.ratingstaricon,
    },
    {
      id: 2,
      Imge: Img.ratingstaricon,
    },
    {
      id: 3,
      Imge: Img.ratingstaricon,
    },
    {
      id: 4,
      Imge: Img.ratingstaricon,
    },
    {
      id: 5,
      Imge: Img.ratingstaricon,
    },
  ];
  return (
    <TouchableOpacity
      style={[styles.container, {style}]}
      onPress={() => navigation.navigate('SortbyScreen')}>
      <Image source={Img.allhostelicon} style={styles.allhosteliconStyle} />
      <View
        style={{
          alignItems: 'flex-start',
          paddingVertical: 5,
          paddingHorizontal: 5,
        }}>
        <Text style={styles.person}>{hostel.availableFor}</Text>
        <Text style={styles.addresStyle}>{hostel.address}</Text>
        <Text style={styles.rentStyle}>Rent - 5K/Month</Text>
        {/* <Image
          source={Img.ratingstaricon}
          style={styles.ratingstariconcontainer}
        /> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}>
          {ratingstartdata.map(item => (
            <View key={item.id} style={styles.iconContainer}>
              <Image
                source={item.Imge}
                style={styles.ratingstariconcontainer}
              />
            </View>
          ))}
        </View>
        {/* <RoomAvailability text={'No More Room Available'} /> */}
      </View>
      <View style={styles.right}>
        {/* <Image source={Img.verifiedicon} style={styles.verifiedIconStyle} /> */}
        <Image
          source={Img.hrt}
          tintColor={'black'}
          style={styles.hrtIconStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AllHostelDetail;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.white,
    borderRadius: 15,
    paddingHorizontal: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: {width: 0, height: 2}, // Shadow position (iOS)
    shadowOpacity: 0.2, // Shadow transparency (iOS)
    shadowRadius: 4,
    paddingVertical: 8,
    marginTop: 10,
  },
  allhosteliconStyle: {
    width: 120,
    height: 120,
    borderRadius: 10,

    // resizeMode:"contain",
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    paddingVertical: 5,
  },
  verifiedIconStyle: {
    width: 20,
    height: 20,
    // backgroundColor:"red",
  },
  hrtIconStyle: {
    width: 20,
    height: 20,
    // marginRight: 25,
    marginLeft: 10,
    // backgroundColor:"red",
  },
  addresStyle: {
    marginTop: 8,
    fontSize: 10,
    color: '#878787',
    fontFamily: FontText.medium,
    lineHeight: 15,
  },
  rentStyle: {
    marginTop: 8,
    fontSize: 10,

    fontFamily: FontText.medium,
    lineHeight: 15,
    color: '#878787',
  },
  ratingstariconcontainer: {
    width: 17,
    height: 17,
    marginTop: 8,
    resizeMode: 'contain',
  },
  iconContainer: {
    marginRight: 15,
  },
  person: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: '#101010',
    lineHeight: 16,
    // fontFamily: 'Poppins-Bold.ttf',
  },
});
