import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import Calendar from 'react-native-vector-icons/Ionicons';
import {Img} from '../utlis/ImagesPath';
const Menu = ({Maintxt, senddata}) => {
  console.log('0>>', senddata);
  return (
    <ImageBackground
      style={styles.container}
      source={Img.Foodmenuicon}
      resizeMode="cover">
      <Text style={styles.maintxt}>{Maintxt}</Text>
      <View style={styles.divider} />
      <View style={styles.calendarcontainer}>
        <Calendar name="calendar-outline" color={Color.btnclr} size={18} />
        <Text style={styles.timingtxt}>{senddata?.startTime || 'no data'}</Text>
      </View>
      <View style={styles.maindishcontainer}>
        <View style={styles.twodishcontainer}>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>
              {senddata?.foodItems?.[0] || 'no data'}
            </Text>
          </View>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>
              {senddata?.foodItems?.[1] || 'no data'}
            </Text>
          </View>
        </View>
        <View style={styles.twodishcontainer}>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>
              {senddata?.foodItems?.[2] || 'no data'}
            </Text>
          </View>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>
              {senddata?.foodItems?.[3] || 'no data'}
            </Text>
          </View>
        </View>
        <View style={styles.twodishcontainer}>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>
              {senddata?.foodItems?.[4] || 'no data'}
            </Text>
          </View>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>
              {senddata?.foodItems?.[5] || 'no data'}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: 20,
    borderWidth: 1,
    borderColor: Color.btnclr,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  divider: {
    width: '100%',
    marginTop: 10,

    borderWidth: 0.5,
    borderColor: Color.btnclr,
  },
  maintxt: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#FFB83A',
  },
  calendarcontainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timingtxt: {
    marginLeft: 10,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: 'black', // Color of the dot
    borderRadius: 5, // Half of the width/height to make it circular
    marginRight: 5,
  },
  dishnamecontainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  dishnametxt: {
    fontSize: 14,
    color: 'red',
  },
  twodishcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  maindishcontainer: {
    width: '100%',
    paddingHorizontal: 5,
  },
});
