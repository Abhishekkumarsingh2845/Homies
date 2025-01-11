import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import Invitebtn from './Invitebtn';
import { useNavigation } from '@react-navigation/native';

const Invite = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.contianer}>
      <TouchableOpacity onPress={()=>navigation.navigate("Referral")}>
      <Image source={Img.lastprofileicon} style={{width: 60, height: 60}} />
      </TouchableOpacity>
   
      <Text >Daniela Chikitani</Text>
      <Invitebtn />
    </View>
  );
};

export default Invite;

const styles = StyleSheet.create({
  contianer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-around',
  },
});
