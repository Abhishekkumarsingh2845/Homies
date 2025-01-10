import {StyleSheet, Text, TouchableOpacity, View,Alert, Share,} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import { FontText } from '../utlis/CustomFont';
import { useNavigation } from '@react-navigation/native';

const Invitebtn = () => {
  const navigation= useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onShare}>
      <Text style={styles.txtstyle}>Invite</Text>
    </TouchableOpacity>
  );
};

export default Invitebtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.btnclr,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal:10,
  },
  txtstyle:
  {
    fontSize:16,
    fontFamily:FontText.medium,
    color:"white"
  }
});
