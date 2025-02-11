import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PersonalDetailElement from './PersonalDetailElement';
import {Img} from '../utlis/ImagesPath';
import Phone from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../utlis/Color';
import {get, post} from '../utlis/Api';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

const PersonalDetailCard = () => {
  const [profile, setProfile] = useState({});
  const user = useSelector(state => state.auth.user);
  const editUserName = async () => {
    try {
      const response = await get('userProfile', {}, token);
      if (response.success) {
        setProfile(response.data);
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
        editIcon={<Feather name="edit-2" color={'#5F6368'} />}
        Icons={<Image source={Img.profileicon} style={styles.profileIcon} />}
        title="Name"
        subtitle={user.name || 'No Name Avaiable'}
      />
      <PersonalDetailElement
        TickIcon={<Image source={Img.greentick} style={styles.greenTick} />}
        title="Mobile Number"
        subtitle={user.phone || 'No Phone no Avaiable'}
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
        subtitle={user.email || 'No Email'}
        Icons={<Image source={Img.msgicon} style={styles.profileIcon} />}
      />
      <PersonalDetailElement
         editIcon={<Feather name="edit-2" color={'#5F6368'} />}
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
