import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontText} from '../utlis/CustomFont';
import { ScreenDimensions } from '../utlis/DimensionApi';

const VisitRequestbtn = ({Onprs,OnPaynowprs}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.visitbtncontainer} onPress={Onprs}>
        <Text style={styles.txtstyle}>VisitRequestbtn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paynowbtncontainer}  onPress={OnPaynowprs}>
        <Text style={styles.paynowtxtstyle}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VisitRequestbtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:10,
    // justifyContent:"space-between",
  },
  visitbtncontainer: {
    // width: 160,
    paddingHorizontal:ScreenDimensions.screenWidth*0.03,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB83A',
    borderRadius: 15,
  },
  txtstyle: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: '#FFFFFF',
  },
  paynowtxtstyle: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: '#FFB83A',
  },
  paynowbtncontainer: {
    paddingHorizontal:ScreenDimensions.screenWidth*0.14,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginLeft: ScreenDimensions.screenWidth*0.02,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    borderColor:"#FFB83A"
  },
});
