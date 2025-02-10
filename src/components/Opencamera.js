import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Cloud from 'react-native-vector-icons/AntDesign';
import { FontText } from '../utlis/CustomFont';
import { openGallery, uploadImageUrl } from '../utlis/ImageHandler';

const Opencamera = ({ operationtxt, fixheight, value,
  error, name,
  setValue }) => {

  const galleryFunc = async () => {
    let res = await openGallery()
    console.log("res--------------", res.response[0].uri)
    if (res.status) {
      const data = {
        uri: res.response[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      }
      let imageRes = await uploadImageUrl(data)
      console.log("image data ======" , imageRes)
      if (imageRes.status) {
        setValue(name, imageRes.imageUrl);

      }
    }
  }
  return (<>
    <Text style={styles.uploadlabel}>Upload Photo & Video</Text>
   
     <View style={[styles.container,{ height: fixheight}]}>

    {
      value ?
        <Image source= {{uri : value}} resizeMode='contain' style={{width :fixheight * 1.2 , height  :"100%"}}/>
        :
        <TouchableOpacity  onPress={galleryFunc} style={{alignItems  :'center'}}>
          <Cloud name="clouduploado" size={20} />
          <Text style={styles.txt}>{operationtxt}</Text>
        </TouchableOpacity>
    }
     </View>

    {
      error && <Text style={styles.errorText} >{error}</Text>
    }
  </>
  );
};

export default Opencamera;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 30,
    borderRadius: 10,
    // height:80,
  },
  txt:
  {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: "#7D7D7D",
  },
  uploadlabel: {
    fontSize: 16,
    fontFamily: FontText.medium,
    marginVertical: 10,

    color: '#333',
  },
  errorText: {
    color: "red",
    fontSize: 11,
    textTransform: 'uppercase'
  },
});
