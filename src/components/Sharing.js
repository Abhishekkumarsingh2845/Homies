import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Sharing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bedsharingcontainer}>
        <Text>Double Sharing</Text>
        <Text>Three Sharing</Text>
        <Text>Five Sharing</Text>
      </View>
      <View style={styles.rentcontainer}>
        <View>
          <Text>Rent per Person</Text>
          <Text>₹8,500</Text>
        </View>
        <View>
          <Text>Rent per Person</Text>
          <Text>₹8,500</Text>
        </View>
      </View>
      <View style={styles.withaccontainer}>
        <View style={styles.outercircle}>
          <View style={styles.innercircle}></View>
        </View>
        <View>
          <Text>With AC</Text>
          <Text>₹9,500</Text>
        </View>
        <View style={styles.outercircle}>
          <View style={styles.innercircle}></View>
        </View>
        <View>
          <Text>With AC</Text>
          <Text>₹9,500</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.timecontainer}>
        <View>
          <Text>Lock in Period</Text>
          <Text>11 Months</Text>
        </View>
        <View>
          <Text>Numbers of Room</Text>
          <Text>30 Rooms</Text>
        </View>
      </View>
    </View>
  );
};

export default Sharing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop:20,
    borderRadius:10,
  },
  bedsharingcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rentcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outercircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFB83A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innercircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  withaccontainer:
  {
      flexDirection:"row",
  },
  line:{
    borderWidth:1,
    borderColor:"#BEC1C4",
  },
  timecontainer:
  {
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
