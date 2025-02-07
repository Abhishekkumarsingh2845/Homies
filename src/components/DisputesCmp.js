import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Dot from 'react-native-vector-icons/Entypo';
import {FontText} from '../utlis/CustomFont';
import {Img} from '../utlis/ImagesPath';
import moment from 'moment';
import { get } from '../utlis/Api';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const DisputesCmp = ({status, statusColor , dispute_id , date , _id}) => {
  const Nav = useNavigation()
  const {token} = useSelector((state) => state.auth.user)

    const getDetailOfDisputes = async () =>{
      console.log("call")
  
          const response = await get('getOneDispute', { disputeId : _id}, token);
          if(response.success){
            Nav.navigate('DisputesDetail' , {data : response?.data})
          }
    }
  return (
    <TouchableOpacity style={styles.container} onPress={getDetailOfDisputes}>
      <View style={styles.cc}>
        <Image source={Img.complainticon} style={styles.complainticonstyle} />
        <View style={styles.complaintdetail}>
          <Text style={styles.complainttxt}>{dispute_id}</Text>
          <Text style={styles.complaintdate}>Date : {moment(date).format('DD-MM-YYYY')}</Text>
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
