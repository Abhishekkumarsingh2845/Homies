import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontText} from '../utlis/CustomFont';

const VisitRequestbtn = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.visitbtncontainer}>
        <Text style={styles.txtstyle}>VisitRequestbtn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paynowbtncontainer}>
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
    paddingHorizontal:20,
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
    paddingHorizontal:50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginLeft: 10,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    borderColor:"#FFB83A"
  },
});
