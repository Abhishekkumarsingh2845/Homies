import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import { Color } from '../../utlis/Color';
import { FontText } from '../../utlis/CustomFont';
import { Img } from '../../utlis/ImagesPath';
import { useNavigation } from '@react-navigation/native';
import { post } from '../../utlis/Api';
import Uploaddoc from '../../components/Uploaddoc';
import { openGallery, uploadImageUrl } from '../../utlis/ImageHandler';
import { ScreenDimensions } from '../../utlis/DimensionApi';
import Toast from 'react-native-toast-message';

const DocumentVerify = () => {
  const navigation = useNavigation();
  const [parentName, setParentName] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [college, setcollege] = useState('');
  const [addhar, setaddhar] = useState('');
  const [loading, setloading] = useState(false)

  const uploadDocument = async () => {

    setloading(true)

    const ImageData = {
      uri: addhar,
      name: 'image.jpg',
      type: 'image/jpeg',
    };

    let imageRes = await uploadImageUrl(ImageData);

    if (imageRes.status) {
      const data = {
        parentsDetails: {
          parentName: parentName,
          parentPhone: phone,
          address: address,
        },
        documents: {
          studentAadhar: imageRes?.imageUrl,
          collegeName: college,
        },
      };
      try {
        const response = await post('uplaodDocuments', data);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Form Filled Successfully',
          position: 'bottom',
        });
        setTimeout(() => {
          navigation.goBack()
        }, 1000);

      } catch (error) {
        console.log( 'error in the  response', error.response || error.message.data,
        );
      }
      Toast.show({
        type: 'error',
        text1: 'Try Again',
        text2: 'Something Went Wrong',
        position: 'bottom',
      });
      setloading(false)

    }
    else {
      Toast.show({
        type: 'error',
        text1: 'Try Again',
        text2: 'Something Went Wrong',
        position: 'bottom',
      });
      setloading(false)

    }
  };

  const galleryFunc = async () => {
    let res = await openGallery('photo');
    if (res?.status) {
      setaddhar(res.response[0].uri);
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
        {
          addhar ?

            <Image source={{ uri: addhar }} style={{ width: ScreenDimensions?.screenWidth * 0.9, height: ScreenDimensions?.screenWidth * 0.5, borderWidth: 2, resizeMode: 'contain' }} />
            :

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
              <Text style={{ color: 'gray' }}>Tap to Upload</Text>
            </TouchableOpacity>
        }
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
          loading={loading}
        />
        <View style={{ marginVertical: 20 }}></View>
      </ScrollView>
      <Toast />

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
