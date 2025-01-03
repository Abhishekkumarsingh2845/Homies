import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {FontText} from '../../utlis/CustomFont';
import ReferralField from '../../components/ReferralField';
import PrimaryBtn from '../../components/PrimaryBtn';
import { Color } from '../../utlis/Color';

const Refferal = () => {
  return (
    <View style={styles.conatiner}>
      <SecondaryHeader detailtxt={'Referral'} />
      <View style={styles.subconatiner}>
        <ReferralField refertxt={"Name"}/>
        <ReferralField refertxt={"Phone Number"}/>
        <ReferralField refertxt={"College/Job/Location"}/>
        <ReferralField refertxt={"Hostel/PG"}/>
        <PrimaryBtn txt={"Submit"} bgcolor={Color.primary}/>
      </View>
    </View>
  );
};

export default Refferal;

const styles = StyleSheet.create({
    conatiner:
    {
        flex:1
    },
  nametxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
  },
  subconatiner: {
    paddingHorizontal: 20,
  },
});
