import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';

const NearLocationProperty = ({ nearproperty,}) => {
console.log("nearproperty==============" , nearproperty)
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1}>
      <Image
        source={
          nearproperty?.property_images?.[0]
            ? {uri: nearproperty?.property_images[0]}
            : Img.allhostelicon
        }
        style={{width: 100, height: 80, borderRadius: 10}}
      />
      <View style={styles.txtcontainer}>
        <Text style={styles.hosteltxt}>
          {nearproperty?.property_name}
        </Text>
        <Text style={styles.addresstxt}>
          {nearproperty?.address || 'no data'}
        </Text>
        <Text style={styles.rentcontainer}>
          {
          nearproperty?.sharing?.[0]?.details?.[0]?.amount ?
          `Rs ${ nearproperty?.sharing?.[0]?.details?.[0]?.amount }`
          :
            'no data'
          }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearLocationProperty;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    // marginTop:10,
  },
  txtcontainer: {
    marginLeft: 15,
  },
  hosteltxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
  },
  addresstxt: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: Color.clr87,
    marginTop: 5,
  },
  rentcontainer: {
    fontSize: 14,
    fontFamily: FontText.bold,
    color: Color.black,
    marginTop: 5,
  },
});
