import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import Tick from 'react-native-vector-icons/EvilIcons';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
const DisputesDetail = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('DisputesFormFill');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Details'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.subconatiner}>
        <Text style={styles.topictxt}>Landlord Name</Text>
        <Text style={styles.topictype}>Mukesh Kumar</Text>
        <Text style={styles.topictxt}>Property Name</Text>
        <Text style={styles.topictype}>Asteria hostel</Text>
        <Text style={styles.descriptiontxt}>Description</Text>
        <Text style={styles.detaildescription}>
          Cleanliness: The common areas and bathrooms are not being cleaned
          regularly, leading to an unhygienic environment.
        </Text>

        <View style={styles.progresscontainer}>
          <Image source={Img.uncheckicon} style={styles.progressstyle} />
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000000',
              marginHorizontal: 5,
            }}></View>
          <Image source={Img.tickicon} style={styles.progressstyle} />
        </View>
        <View style={styles.statuscontainer}>
          <Text>Pending</Text>
          <Text>Resolved</Text>
        </View>
      </View>
    </View>
  );
};

export default DisputesDetail;

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
    fontFamily:FontText.medium,
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
    fontFamily:FontText.medium,
    lineHeight: 20,
    color: '#000000',
  },
  detaildescription: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: Color.clr87,
    lineHeight: 18,
  },
  statuscontainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
