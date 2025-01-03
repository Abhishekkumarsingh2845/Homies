import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import PaymentMethod from '../../components/PaymentMethod';
import PrimaryBtn from '../../components/PrimaryBtn';

const PaymentForm = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader detailtxt={'Payment'} />
      <View style={styles.subcontainer}>
        <Text style={styles.dueamounttxt}>Due Amount</Text>
        <Text style={styles.selectpayment}>Select payment method</Text>
        <PaymentMethod labelText={'UPI'} />
        <PaymentMethod labelText={'Internet Banking'} />
        <PaymentMethod labelText={'Credit/Debit Card'} />
        <Text style={styles.dueamounttxt}>Enter Card Number</Text>
        <Text style={styles.dueamounttxt}>Card Holder Name</Text>
        <View style={styles.expirydatecontainer}>
          <Text style={styles.dueamounttxt}>Expiry Date</Text>
          <Text style={styles.dueamounttxt}>CVV</Text>
        </View>
        <PaymentMethod labelText={'Cash'} />
        <PrimaryBtn txt={'Pay Now'} bgcolor={'#257500'} mgntop={300}/>
      </View>
    </View>
  );
};

export default PaymentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  dueamounttxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
  },
  selectpayment: {
    fontSize: 14,
    fontFamily: FontText.bold,
    color: Color.black,
  },
  expirydatecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
