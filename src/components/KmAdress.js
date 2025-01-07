import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const KmAdress = () => {
  return (
    <View style={styles.container}>
      <Image source={Img.lcn} style={styles.location} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.nametxt}>
          Adarsh Nagar <Text>- 885.6 km</Text>
        </Text>
        <Text>Ram Nagar , NT 0872, Katraj</Text>
      </View>
    </View>
  );
};

export default KmAdress;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:20,
  },
  location: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: Color.black,
    // marginLeft:10,
  },
  nametxt: {
    fontSize: 16,
    color: Color.black,
    fontFamily: FontText.medium,
  },
});
