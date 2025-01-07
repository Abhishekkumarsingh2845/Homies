
import {Image, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import Smile from 'react-native-vector-icons/Feather';

const MessageTypeBar = () => {
  return (
    <View style={styles.shadowWrapper}>
      <KeyboardAvoidingView>
      <View style={styles.container}>
        <Smile name="smile" size={20} color="#575757" />
        <TextInput
          placeholder="Type here......."
          placeholderTextColor={'#575757'}
          style={styles.textInput}
        />
        <Image source={Img.galleryicon} style={styles.gallerystyle} />
        <Image source={Img.telegramicon} style={styles.telegramicon} />
      </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MessageTypeBar;

const styles = StyleSheet.create({
  shadowWrapper: {
    marginHorizontal: 10,
    marginTop: 10,

    borderRadius: 20, // Matches the container's border radius
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: -2}, // Shadow on top
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        overflow: 'hidden',
      },
    }),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    elevation: 2, // Android-specific shadow
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },
  gallerystyle: {
    width: 25,
    height: 25,
    marginHorizontal: 8,
  },
  telegramicon: {
    width: 25,
    height: 25,
  },
});
