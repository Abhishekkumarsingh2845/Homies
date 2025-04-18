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
import { Img } from '../../utlis/ImagesPath';
import PayNowbtn from '../../components/PayNowbtn';
import NearLocationProperty from '../../components/NearLocationProperty';

const Payment = () => {
  return (
    <View style={styles.conatiner}>
      <SecondaryHeader gobackImage={Img.goback} detailtxt={'Transaction'} />
      <View style={styles.subcontainer}>
        <PayNow icon={<PayNowbtn/> } msg={"Refresh"} />
        <Text style={styles.propertydetailtxt}>Property Details</Text>
        {/* <AllHostelDetail mrntop={10} /> */}
        <NearLocationProperty />
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
    marginVertical:10,
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
