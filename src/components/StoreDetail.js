import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import Location from 'react-native-vector-icons/Entypo';
import Phone from 'react-native-vector-icons/Feather';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';
const StoreDetail = ({strdetail}) => {
  console.log('->>>>>> itme', strdetail.phone);
  return (
    <View style={styles.container}>
      <Image source={Img.storeimgicon} style={styles.imgstyle} />
      <View style={styles.detailcontainer}>
        {/* <Text style={styles.namextx}> Fresh Express </Text> */}
        <Text style={styles.namextx}>{strdetail?.name} </Text>
        <View style={styles.addressdetail}>
          <Location name="location-pin" size={16} color={'#FF9457'} />

          <Text style={styles.addresstxt}>
            {(() => {
              try {
                return (
                  JSON.parse(strdetail?.address)?.value?.description ||
                  'No Address'
                );
              } catch (error) {
                console.log('Error parsing address:', error.message);
                return 'Invalid Address';
              }
            })()}
          </Text>
        </View>

        <View style={styles.phonedetail}>
          <Phone name="phone-call" size={15} color={'#FF9457'} />
          {/* <Text style={styles.phonetxt}>+91-8765894326</Text> */}
          <Text style={styles.phonetxt}>{strdetail.phone || '4987298772'}</Text>
        </View>
      </View>
    </View>
  );
};

export default StoreDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  imgstyle: {
    width: 130,
    height: 100,
    borderRadius: 5,
    // resizeMode:"contain",
  },
  addressdetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
    // backgroundColor:"red",
  },
  phonedetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 2,
    //  backgroundColor:"red"
  },
  detailcontainer: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  namextx: {
    fontSize: 14,
    fontFamily: FontText.medium,
    paddingHorizontal: 3,

    color: Color.black,
  },
  addresstxt: {
    fontSize: 10,
  },
  phonetxt: {
    fontSize: 10,
    lineHeight: 15,
    // color:"red",
    marginRight: 15,
  },
});
