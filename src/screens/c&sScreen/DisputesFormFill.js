import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import Tick from 'react-native-vector-icons/EvilIcons';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';
import { ScreenDimensions } from '../../utlis/DimensionApi';
const DisputesFormFill = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Disputes'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.subconatiner}>
        <Text style={styles.topictxt}>Landlord Name</Text>
        <Text style={styles.topictype}>Mukesh Kumar</Text>
        <Text style={styles.topictxt}>Property Name</Text>
        <Text style={styles.topictype}>Asteria hostel</Text>
        <Text style={styles.descriptiontxt}>Description</Text>

        {/* <Text style={styles.detaildescription}>
          Cleanliness: The common areas and bathrooms are not being cleaned
          regularly, leading to an unhygienic environment.
        </Text> */}
        <ComplaintTxtInpt height={160} multiline={false} bgcolor="#F2F2F2" />
        <PrimaryBtn bgcolor={Color.primary} txt={'Submit'}  mgntop={ScreenDimensions.screenHeight*0.25} />
      </View>
    </View>
  );
};

export default DisputesFormFill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subconatiner: {
    paddingHorizontal: 20,
  },
  imgstyle: {
    width: 100,
    height: 80,
  },
  attachmentconatiner: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progresscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  progressstyle: {
    width: 25,
    height: 25,
  },
  topictxt: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontText.bold,
    lineHeight: 20,
    color: '#000000',
  },
  topictype: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: '#7D7D7D',
    lineHeight: 18,
  },
  descriptiontxt: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontText.bold,
    lineHeight: 20,
    color: '#000000',
  },
  detaildescription: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: '#7D7D7D',
    lineHeight: 18,
  },
  statuscontainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detaildescription: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: Color.clr87,
    lineHeight: 18,
  },
});
