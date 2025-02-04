import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import PaymentMethod from '../../components/PaymentMethod';
import PrimaryBtn from '../../components/PrimaryBtn';
import HostelRentOut from '../homeScreen/HostelRentOut';
import PaymenttxtInpt from '../../components/PaymenttxtInpt';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import PermonthRent from '../../components/PermonthRent';
import PaymentSucces from './PaymentSucces';

const PaymentForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Payment'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.subcontainer}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.dueamounttxt}>Due Amount</Text>
        <PaymenttxtInpt placeholder="5000/-" />
        <Text style={styles.selectpayment}>Select payment method</Text>
        <PaymentMethod labelText={'UPI'} />
        <PaymentMethod labelText={'Internet Banking'} />
        <PaymentMethod labelText={'Credit/Debit Card'} />
        <View style={styles.detailcontainerr}>
          <Text style={styles.dueamounttxt}>Enter Card Number</Text>
          <PaymenttxtInpt />
          <Text style={styles.dueamounttxt}>Card Holder Name</Text>
          <PaymenttxtInpt placeholder="Card holder name" />
          <View style={styles.expirydatecontainer}>
            <View>
              <Text style={styles.dueamounttxt}>Expiry Date</Text>

              <PaymenttxtInpt width="100%" placeholder="MM/YY" />
            </View>
            <View style={{marginRight: 45}}>
              <Text style={styles.dueamounttxt}>CVV</Text>
              <PaymenttxtInpt width="200%" placeholder="CVV" />
            </View>
          </View>
        </View>
        <PaymentMethod labelText={'Cash'} />
        {/* <PermonthRent rent='Total Payment' /> */}
        <PrimaryBtn
          onPress={() => navigation.navigate('PaymentSucces')}
          // destination={PaymentSucces}
          txt={'Pay Now'}
          bgcolor={'#257500'}
          mgntop={10}
        />
      </ScrollView>
    </View>
  );
};

export default PaymentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  dueamounttxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    marginTop: 20,
  },
  selectpayment: {
    fontSize: 14,
    fontFamily: FontText.bold,
    color: Color.black,
    marginTop: 20,
  },
  expirydatecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailcontainerr: {
    marginLeft: 35,
    marginTop: 10,
  },
});
