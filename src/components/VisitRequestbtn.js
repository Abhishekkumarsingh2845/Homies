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
        <Text style={styles.paynowtxtstyle}>Pay Nw</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VisitRequestbtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:10,
  },
  visitbtncontainer: {
    width: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB83A',
    borderRadius: 20,
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
    width: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 10,
    borderColor: '#FFB83A',
    borderWidth: 1,
  },
});
