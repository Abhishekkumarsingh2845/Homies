import {StyleSheet, Text, View} from 'react-native';
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

const PaymentHomeForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Payment'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.subcontainer}>
        {/* <Text style={styles.dueamounttxt}>Due Amount</Text> */}
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
        <PermonthRent rent="Total Payment" />
        <PrimaryBtn
          Onpress={() => navigation.navigate('BottomTab')}
          txt={'Pay Now'}
          bgcolor={Color.btnclr}
          mgntop={5}
        />
      </View>
    </View>
  );
};

export default PaymentHomeForm;

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
    marginTop: 5,
  },
  selectpayment: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    marginTop: 15,
  },
  expirydatecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailcontainerr: {
    marginLeft: 35,
    marginTop: 10,
  },
});
