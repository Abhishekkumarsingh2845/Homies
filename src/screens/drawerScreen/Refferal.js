import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {FontText} from '../../utlis/CustomFont';
import ReferralField from '../../components/ReferralField';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {useNavigation} from '@react-navigation/native';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';
import {Img} from '../../utlis/ImagesPath';
import { ScreenDimensions } from '../../utlis/DimensionApi';

const Refferal = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Referral'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.subconatiner}>
        <ReferralField refertxt={'Name'} />
        <ComplaintTxtInpt placeholder="Enter Name" />
        <ReferralField refertxt={'Phone Number'} />
        <ComplaintTxtInpt placeholder="Enter Code" />
        <ReferralField refertxt={'College/Job/Location'} />
        <ComplaintTxtInpt placeholder="Enter College/Job/Location" />
        <ReferralField refertxt={'Hostel/PG'} />
        <ComplaintTxtInpt placeholder="Enter Hostel / PG" />
        <PrimaryBtn txt={'Submit'} bgcolor={Color.primary} mgntop={ScreenDimensions.screenHeight*0.2} />
      </View>
    </View>
  );
};

export default Refferal;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  nametxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
  },
  subconatiner: {
    paddingHorizontal: 20,
  },
});
