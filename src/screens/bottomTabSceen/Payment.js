import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PayNow from '../../components/PayNow';
import AllHostelDetail from '../../components/AllHostelDetail';
import HostelImg from '../../components/HostelImg';
import DateSelect from '../../components/DateSelect';
import Transactiondetail from '../../components/Transactiondetail';

const Payment = () => {
  return (
    <View style={styles.conatiner}>
      <SecondaryHeader detailtxt={'Transaction'} />
      <View style={styles.subcontainer}>
        <PayNow />
        <Text>Property Details</Text>
        <AllHostelDetail mrntop={10} />
        <View style={styles.datecontainer}>
          <Text>Transaction List</Text>
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

  }
});