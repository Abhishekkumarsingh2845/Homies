import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import Calendar from 'react-native-vector-icons/Ionicons';
const Menu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintxt}>Breakfast</Text>
      <View style={styles.divider} />
      <View style={styles.calendarcontainer}>
        <Calendar name="calendar-outline" color={Color.btnclr} size={18} />
        <Text style={styles.timingtxt}>07:00 AM -10:00AM</Text>
      </View>
      <View style={styles.maindishcontainer}>
        <View style={styles.twodishcontainer}>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>Bread Jam</Text>
          </View>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>Onion & Tomato Chutney</Text>
          </View>
        </View>
        <View style={styles.twodishcontainer}>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>Bread Jam</Text>
          </View>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>Onion & Tomato Chutney</Text>
          </View>
        </View>
        <View style={styles.twodishcontainer}>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>Bread Jam</Text>
          </View>
          <View style={styles.dishnamecontainer}>
            <View style={styles.dot} />
            <Text styles={styles.dishnametxt}>Onion & Tomato Chutney</Text>
          </View>
        </View>
      </View>
    </View>
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
    borderRadius: 10,
  },
  divider: {
    width: '100%',
    marginTop: 10,

    borderWidth: 0.5,
    borderColor: Color.btnclr,
  },
  maintxt: {
    alignSelf: 'center',
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
    width: 5, // Diameter of the dot
    height: 5, // Diameter of the dot
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
