import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import Tick from 'react-native-vector-icons/EvilIcons';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation, useRoute} from '@react-navigation/native';
const ComplaintFormFill = () => {
  const navigation = useNavigation();
  const {params} = useRoute()
  const data = params.data

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('Disputes');
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);
  return (
    <ScrollView>
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Complaint Form'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.subconatiner}>
        <Text style={styles.topictxt}>Topic</Text>
        <Text style={styles.topictype}>{data.complaintTitle}</Text>  
        <Text style={styles.descriptiontxt}>Description</Text>
        <Text style={styles.detaildescription}>
          {data?.complaintDescription}
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
    {
       data.propertyMedia.map((item , index) =>{
       return <Image source={{uri  : item?.mediaUrl}} style={styles.imgstyle} />
       })
    }
          {/* <Image source={{uri  :  data.propertyMedia[0]?.mediaUrl}} style={styles.imgstyle} />
          <Image source={{uri  :  data.propertyMedia[0]?.mediaUrl}} style={styles.imgstyle} />
          <Image source={{uri  :  data.propertyMedia[0]?.mediaUrl}} style={styles.imgstyle} /> */}
        </View>

        <View style={styles.progresscontainer}>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image source={Img.tickicon} style={styles.progressstyle} />
            <Text>Accept</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000000',
              marginHorizontal: 5,
            }}></View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image source={Img.uncheckicon} style={styles.progressstyle} />
            <Text>In Progress</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000000',
              marginHorizontal: 5,
            }}></View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image source={Img.uncheckicon} style={styles.progressstyle} />
            <Text>Completed</Text>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
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
    fontFamily: FontText.medium,
    lineHeight: 20,
    color: '#000000',
  },
  topictype: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: '#7D7D7D',
    lineHeight: 18,
    marginTop: 10,
  },
  descriptiontxt: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontText.medium,
    lineHeight: 20,
    color: '#000000',
  },
  detaildescription: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: '#7D7D7D',
    lineHeight: 18,
    marginTop: 10,
  },
});
