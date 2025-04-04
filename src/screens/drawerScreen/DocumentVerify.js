import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
import Uploaddoc from '../../components/Uploaddoc';
import {openGallery, uploadImageUrl} from '../../utlis/ImageHandler';

const DocumentVerify = () => {
  const navigation = useNavigation();
  const [parentName, setParentName] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [college, setcollege] = useState('');
  const [addhar, setaddhar] = useState('');

  const uploadDocument = async () => {
    const data = {
      parentsDetails: {
        parentName: parentName,
        parentPhone: phone,
        address: address,
      },
      documents: {
        studentAadhar: addhar,
        collegeName: college,
      },
    };
    console.log('Data before API call:', data);
    try {
      const response = await post('uplaodDocuments', data);
      console.log('response of the  upload document response', response.data);
    } catch (error) {
      console.log(
        'error in the  response',
        error.response || error.message.data,
      );
    }
  };

  const galleryFunc = async () => {
    console.log('res--------------1');

    let res = await openGallery();
    // const as = res.response[0].uri;

    console.log('res--------------->>>>>>bnsdjkbkb', res.response[0].uri);
    
    if (res.status) {
      const data = {
        uri: res.response[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      };
      let imageRes = await uploadImageUrl(data);
      console.log("-<bjfdsbv",imageRes);
      console.log('image data ======', imageRes);
 
      if (imageRes.status) {
        console.log("imageRes?.imageUrl," , imageRes?.imageUrl,)

        setaddhar(imageRes?.imageUrl);
      }
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
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            paddingVertical: 40,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}
          onPress={galleryFunc}>
          {addhar ? (
            <Text style={{color: 'blue', textAlign: 'center'}}>Sucess</Text>
          ) : (
            <Text style={{color: 'gray'}}>Tap to Upload</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.uploadtxt}>Student / Job ID</Text>

        <Text style={styles.uploadtxt}>College Name</Text>

        <Uploaddoc
          onchgtxt={setcollege}
          value={college}
          placeholder={'College'}
        />

        <Text style={styles.uploadtxt}>Parents Details</Text>
        <Text style={styles.uploadtxt}>Name</Text>
        {/* <ComplaintTxtInpt
          value={parentName}
          setValue={setParentName}
          placeholder="Name"
        /> */}
        <Uploaddoc
          onchgtxt={setParentName}
          value={parentName}
          placeholder={'Name'}
        />
        <Text style={styles.uploadtxt}>Phone Number</Text>

        <Uploaddoc
          onchgtxt={setphone}
          value={phone}
          placeholder={'Phone Number'}
        />
        <Text style={styles.uploadtxt}>Address</Text>
        {/* <ComplaintTxtInpt
          value={address}
          setValue={setaddress}
          placeholder="Address"
        /> */}
        <Uploaddoc
          onchgtxt={setaddress}
          value={address}
          placeholder={'Address'}
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
