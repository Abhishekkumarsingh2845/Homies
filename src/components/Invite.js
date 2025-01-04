import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import Invitebtn from './Invitebtn';

const Invite = () => {
  return (
    <View style={styles.contianer}>
      <Image source={Img.lastprofileicon} style={{width: 60, height: 60}} />
      <Text>Daniela Chikitani</Text>
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
