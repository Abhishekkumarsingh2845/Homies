import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import Tick from 'react-native-vector-icons/EvilIcons';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import PrimaryBtn from '../../components/PrimaryBtn';
const ComplaintFormFill = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader detailtxt={'Complaint Form'} />
      <View style={styles.subconatiner}>
        <Text style={styles.topictxt}>Topic</Text>
        <Text style={styles.topictype}>Cleanliness</Text>
        <Text style={styles.descriptiontxt}>Description</Text>
        <Text style={styles.detaildescription}>
          Cleanliness: The common areas and bathrooms are not being cleaned
          regularly, leading to an unhygienic environment.
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 12,
            fontFamily: FontText.medium,
            color: Color.black,
          }}>
          Attachements
        </Text>
        <View style={styles.attachmentconatiner}>
          <Image source={Img.attachmenticon} style={styles.imgstyle} />
          <Image source={Img.attachmenticon} style={styles.imgstyle} />
          <Image source={Img.attachmenticon} style={styles.imgstyle} />
        </View>
        <View style={styles.progresscontainer}>
          <Image source={Img.tickicon} style={styles.progressstyle} />
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000000',
              marginHorizontal: 5,
            }}></View>
          <Image source={Img.uncheckicon} style={styles.progressstyle} />
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000000',
              marginHorizontal: 5,
            }}></View>
          <Image source={Img.uncheckicon} style={styles.progressstyle} />
        </View>
      </View>
    </View>
  );
};

export default ComplaintFormFill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: FontText.light,
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
    fontFamily: FontText.light,
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
});