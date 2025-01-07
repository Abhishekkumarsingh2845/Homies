import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';

const Sharing = () => {
  const [selectedSharing, setSelectedSharing] = useState('Double Sharing'); // Track the selected sharing type
  const handleSharingSelection = sharingType => {
    setSelectedSharing(sharingType); // Update selected sharing type
  };
  return (
    <View style={styles.container}>
      <View style={styles.bedsharingcontainer}>
        <TouchableOpacity
          onPress={() => handleSharingSelection('Double Sharing')} >
          <Text style={styles.sharingtxtstyle}>Double Sharing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSharingSelection('Three Sharing')}>
          <Text style={styles.sharingtxtstyle}>Three Sharing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSharingSelection('Five Sharing')}>
          <Text style={styles.sharingtxtstyle}>Five Sharing</Text>
        </TouchableOpacity>
      </View>

      {selectedSharing === 'Double Sharing' && (
        <>
          <View style={styles.rentcontainer}>
            <View style={styles.rentpercontainer}>
              <Text>Rent per Person</Text>
              <Text>₹8,500</Text>
            </View>
            <View>
              <Text>Rent per Person</Text>
              <Text>₹8,500</Text>
            </View>
          </View>





          <View style={styles.withaccontainer}>
            <View>
            <View style={styles.outercircle}>
              <View style={styles.innercircle}></View>
            </View>
            </View>
            <View>
            <View>
              <Text>With AC</Text>
              <Text>₹9,500</Text>
            </View>
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
          <View style={{marginVertical:10}}/>
        </>
      )}
      {selectedSharing === 'Three Sharing' && (
        <>
          <View style={styles.rentcontainer}>
            <View>
              <Text>Rent per Person</Text>
              <Text>₹,500</Text>
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
          <View style={{marginVertical:10}}/>
        </>
      )}
      {selectedSharing === 'Five Sharing' && (
        <>
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
          <View style={{marginVertical:10}}/>
        </>
      )}
    </View>
  );
};

export default Sharing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 10,
  },
  bedsharingcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:10,
  },
  rentcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop:10,
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
  withaccontainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent:"space-between",
    marginTop:10,
    // backgroundColor:"red"
  },
  line: {
    borderWidth: 1,
    borderColor: '#BEC1C4',
    marginHorizontal: 20,
    marginTop:10,
  },
  timecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop:10,
  },
  rentpercontainer:{
   
  },
  sharingtxtstyle:
  {
    fontSize:14,
    fontFamily:FontText.medium,
    color:Color.black
  }
});
