import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PersonalDetailElement from './PersonalDetailElement';
import {Img} from '../utlis/ImagesPath';
import Phone from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../utlis/Color';
import {post} from '../utlis/Api';
import { useSelector } from 'react-redux';

const PersonalDetailCard = () => {
  const [data, setData] = useState(null);
  const token = useSelector(state => state.auth.token);
  console.log('token received from redux in termcondition', token);
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlmYTc1OTNlNjZiMWY4YmNmYjYwMDkiLCJpYXQiOjE3Mzg1MTYzMTN9.JuLwf9Pwv1qLzcvxmvRiZOpbIywWM-zw6NI6mjDUc5s';
  const editUserName = async () => {
    try {
      const response = await post('updateProfile', {name: 'Abhishek'}, token);
      console.log('response of the editUserprofile', response);
      if (response.success) {
        setData(response.data.name);
        console.log('name->>', response.data[0].name);
      }
    } catch (error) {
      console.log(
        'error in the editUserprofile',
        error?.response?.data || error?.message,
      );
    }
  };
  useEffect(() => {
    editUserName();
  }, []);
  return (
    <View style={styles.container}>
      <PersonalDetailElement
        Icons={<Image source={Img.profileicon} style={styles.profileIcon} />}
        title="Name"
        subtitle={data || 'no Name Avaiable'}
      />
      <PersonalDetailElement
        TickIcon={<Image source={Img.greentick} style={styles.greenTick} />}
        title="Mobile Number"
        subtitle=" +463 634 6774"
        Icons={
          <Phone
            TickIcon={<Image source={Img.greentick} style={styles.greenTick} />}
            name="phone-in-talk-outline"
            size={20}
            color={Color.black}
            style={styles.profileIcon}
          />
        }
      />
      <PersonalDetailElement
        TickIcon={<Image source={Img.greentick} style={styles.greenTick} />}
        title="Email"
        subtitle="daniela@gmail.com"
        Icons={<Image source={Img.msgicon} style={styles.profileIcon} />}
      />
      <PersonalDetailElement
        title="College name"
        subtitle="Hans Raj College"
        Icons={<Image source={Img.msgicon} style={styles.profileIcon} />}
      />
    </View>
  );
};

export default PersonalDetailCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  profileIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 12,
  },
  greenTick: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
