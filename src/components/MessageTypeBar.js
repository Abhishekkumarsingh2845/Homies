import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import Smile from 'react-native-vector-icons/Feather';
import {Img} from '../utlis/ImagesPath';
const MessageTypeBar = () => {
  return (
    <View style={styles.container}>
      <Smile name="smile" />

      <TextInput
        placeholder="Type here......."
        placeholderTextColor={'#575757'}
      />
      <Image source={Img.galleryicon} style={styles.gallerystyle} />
      <Image source={Img.telegramicon} style={styles.telegramicon} />
    </View>
  );
};

export default MessageTypeBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    elevation:0.5,
    marginHorizontal:10,
    paddingVertical:15,
    borderRadius:15,
    paddingHorizontal:10,
    marginTop:10,
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Offset for the shadow
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 3.84, // Radius for the blur effect
   
  },
  gallerystyle: {
    width: 25,
    height: 25,
  },
  telegramicon: {
    width: 25,
    height: 25,
  },
});
