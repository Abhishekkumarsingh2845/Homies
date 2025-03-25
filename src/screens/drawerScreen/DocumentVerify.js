import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';
import Opencamera from '../../components/Opencamera';
import {FontText} from '../../utlis/CustomFont';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import {post} from '../../utlis/Api';

const DocumentVerify = () => {
  const navigation = useNavigation();
  const [parentName, setParentName] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [college, setcollege] = useState('');

  const uploadDocument = async () => {

    const data = {
      parentsDetails: {
        parentName: parentName,
        parentPhone: phone,
        address: address,
      },
      documents: {
        collegeName: college,
      },
    };
    console.log('Data before API call:', data); 
    try {

      const response = await post('uplaodDocuments', data);
      console.log(
        'response of the  upload document response',
        response.data,
      );
    } catch (error) {
      console.log(
        'error in the  response',
        error.response || error.message.data,
      );
    }
  };

  return (
    <View style={styles.conttainer}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Document verfiy'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.subcontainer}>
        <Text style={styles.uploadtxt}>Upload your Documents</Text>
        <Text style={styles.uploadtxt}>Student Aadhar Card</Text>
        <Opencamera fixheight={80} operationtxt={'Browse file from gallery'} />

        <Text style={styles.uploadtxt}>Student / Job ID</Text>
        <Opencamera fixheight={80} operationtxt={'Browse file from gallery'} />
        <Text style={styles.uploadtxt}>College Name</Text>
        <ComplaintTxtInpt
          value={college}
          setValue={(text) => {console.log("college name" , text);}}
          placeholder="College Name"
        />
        <Text style={styles.uploadtxt}>Parents Details</Text>
        <Text style={styles.uploadtxt}>Name</Text>
        <ComplaintTxtInpt
          value={parentName}
          setValue={setParentName}
          placeholder="Name"
        />
        <Text style={styles.uploadtxt}>Phone Number</Text>
        <ComplaintTxtInpt
          value={phone}
          setValue={setphone}
          placeholder="Phone Number"
        />
        <Text style={styles.uploadtxt}>Address</Text>
        <ComplaintTxtInpt
          value={address}
          setValue={setaddress}
          placeholder="Address"
        />
        <PrimaryBtn
          mgntop={20}
          txt={'Submit'}
          bgcolor={Color.primary}
          Onpress={() => uploadDocument()}
        />
        <View style={{marginVertical: 20}}></View>
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
