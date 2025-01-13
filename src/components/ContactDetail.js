import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogoutModal from './LogoutModal';

const ContactDetail = ({title, message, imageSource, contactInfo}) => {
  return (
    <View style={styles.container}>
      {/* Dynamic Title */}
      <Text style={styles.title}>{title}</Text>
      
      {/* Dynamic Message and Image */}
      <View style={styles.msgcontainer}>
        <Text style={styles.msgtxt}>{message}</Text>
        <Image source={imageSource} style={styles.img} />
      </View>
      
      {/* Dynamic Contact Information */}
      <Text style={styles.detailinfo}>{contactInfo}</Text>
   
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  msgcontainer: {
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  img: {
    width: 50,
    height: 50,
    resizeMode:"contain",
  },
  title: {
    fontSize: 14,
    fontFamily: 'FontText.medium',
    lineHeight: 24,
    color: '#000000',
  },
  msgtxt: {
    letterSpacing: 0.5,
    fontSize: 12,
    fontFamily: 'FontText.light',
    lineHeight: 16,
    color: '#5F5F5FCC',
  },
  detailinfo: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'FontText.medium',
    lineHeight: 24,
    color: '#000000',
  },
});
