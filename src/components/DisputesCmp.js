import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Dot from 'react-native-vector-icons/Entypo';
import {FontText} from '../utlis/CustomFont';
import {Img} from '../utlis/ImagesPath';

const DisputesCmp = ({status, statusColor}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.cc}>
        <Image source={Img.complainticon} style={styles.complainticonstyle} />
        <View style={styles.complaintdetail}>
          <Text style={styles.complainttxt}>Complaint 001</Text>
          <Text style={styles.complaintdate}>Date : 18-09-2024</Text>
          <Text style={styles.complaintno}>
            Status :
            <Text
              style={{
                fontSize: 14,
                fontFamily: FontText.medium,
                color: statusColor,
              }}>
              {status}
            </Text>
          </Text>
        </View>
      </View>

      <Dot name="dots-three-vertical" size={20} color={'black'} />
    </TouchableOpacity>
  );
};

export default DisputesCmp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
