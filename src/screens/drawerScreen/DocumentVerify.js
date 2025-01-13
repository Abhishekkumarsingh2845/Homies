import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';
import Opencamera from '../../components/Opencamera';
import {FontText} from '../../utlis/CustomFont';
import { Img } from '../../utlis/ImagesPath';
import { useNavigation } from '@react-navigation/native';

const DocumentVerify = () => {
  const navigation= useNavigation();
  return (
    <View style={styles.conttainer}>
      <SecondaryHeader gobackImage={Img.goback}  detailtxt={"Document verfiy"} onPress={()=>navigation.goBack()}  />
      <ScrollView contentContainerStyle ={styles.subcontainer}>
        <Text style={styles.uploadtxt}>Upload your Documents</Text>
        <Text style={styles.uploadtxt}>Student Aadhar Card</Text>
        <Opencamera fixheight={80} operationtxt={'Browse file from gallery'} />

        <Text style={styles.uploadtxt}>Student / Job ID</Text>
        <Opencamera fixheight={80} operationtxt={'Browse file from gallery'} />
        <Text style={styles.uploadtxt}>College Name</Text>
        <ComplaintTxtInpt placeholder="College Name" />
        <Text style={styles.uploadtxt}>Parents Details</Text>
        <Text style={styles.uploadtxt}>Name</Text>
        <ComplaintTxtInpt placeholder="Name" />
        <Text style={styles.uploadtxt}>Phone Number</Text>
        <ComplaintTxtInpt placeholder="Phone Number" />
        <Text style={styles.uploadtxt}>Address</Text>
        <ComplaintTxtInpt placeholder="Address" />
        <PrimaryBtn mgntop={20} txt={'Submit'} bgcolor={Color.primary} />
        <View style={{marginVertical:20}}></View>
      </ScrollView>
    </View>
  );
};

export default DocumentVerify;

const styles = StyleSheet.create({
  conttainer: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  uploadtxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    marginTop: 5,
  },
});
