import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import Dot from 'react-native-vector-icons/Entypo';
import {FontText} from '../utlis/CustomFont';

const Complaint = ({ComplaintNo,title,datee}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.cc}>
        <Image source={Img.complainticon} style={styles.complainticonstyle} />
        <View style={styles.complaintdetail}>
          <Text style={styles.complainttxt}>{ComplaintNo}</Text>
          <Text style={styles.complaintno}>Title :{title}</Text>
          <Text style={styles.complaintdate}>Date :{datee}</Text>
        </View>
      </View>

      <Dot name="dots-three-vertical" size={20} color={'black'} />
    </TouchableOpacity>
  );
};

export default Complaint;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    // paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: 10,
  },
  complainticonstyle: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
  complaintdetail: {
    marginLeft: 20,
  },
  complainttxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    lineHeight: 20,
    color: '#000000',
  },
  complaintno: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: '#000000',
  },
  complaintdate: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: '#000000',
  },
  cc: {
    // backgroundColor:"red",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
