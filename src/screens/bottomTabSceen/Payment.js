import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PayNow from '../../components/PayNow';
import AllHostelDetail from '../../components/AllHostelDetail';
import HostelImg from '../../components/HostelImg';
import DateSelect from '../../components/DateSelect';
import Transactiondetail from '../../components/Transactiondetail';
import { FontText } from '../../utlis/CustomFont';
import { Color } from '../../utlis/Color';

const Payment = () => {
  return (
    <View style={styles.conatiner}>
      <SecondaryHeader detailtxt={'Transaction'} />
      <View style={styles.subcontainer}>
        <PayNow />
        <Text style={styles.propertydetailtxt}>Property Details</Text>
        <AllHostelDetail mrntop={10} />
        <View style={styles.datecontainer}>
          <Text style={styles.listtxt}>Transaction List</Text>
          <DateSelect/>
        </View>
        <Transactiondetail/>
        <Transactiondetail/>
        <Transactiondetail/>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  datecontainer:
  {
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

  },
  propertydetailtxt:
  {
    marginTop:10,
    fontSize:16,
    fontFamily:FontText.medium,
    color:Color.black,
  },
  listtxt:
  {
    marginTop:10,
    fontSize:16,
    fontFamily:FontText.medium,
    color:Color.black,
  }
});
