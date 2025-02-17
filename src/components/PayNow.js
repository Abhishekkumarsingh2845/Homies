import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import PayNowbtn from './PayNowbtn';
import {FontText} from '../utlis/CustomFont';
import Refresh from 'react-native-vector-icons/Ionicons';
const PayNow = ({icon, msg = ''}) => {
  return (
    <ImageBackground source={Img.headerbg} style={styles.conatiner}>
      <View style={styles.dueamountcontainer}>
        <Text style={styles.dueamounttxt}>Total Due Amount</Text>
        <View style={styles.refreshcontainer}>
          <View style={{marginRight: 5}}>
            <Refresh name="refresh" color={'white'} size={14} />
          </View>

          <Text style={styles.refresh}>{msg}</Text>
        </View>
      </View>
      <View style={styles.amountcontainer}>
        <Text style={styles.amount}>₹5000/-</Text>
        {icon}
        {/* <PayNowbtn/> */}
      </View>
    </ImageBackground>
  );
};

export default PayNow;

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 20,
    height: 120,
    paddingHorizontal: 20,
    overflow: 'hidden',
    borderRadius: 15,
  },
  dueamountcontainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dueamounttxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: '#FFFFFF',
    lineHeight: 18,
  },
  refresh: {
    fontSize: 13,
    fontFamily: FontText.medium,
    color: '#FFFFFF',
    // lineHeight:16
  },
  amount: {
    fontSize: 20,
    fontFamily: FontText.medium,
    color: '#FFFFFF',
    // lineHeight:16
  },
  amountcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  refreshcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
