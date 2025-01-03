import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heart from 'react-native-vector-icons/EvilIcons';
import Share from 'react-native-vector-icons/AntDesign';
import { Color } from '../utlis/Color';

const LikeShare = () => {
  return (
    <View style={styles.container}>
      <View style={styles.whitecontainer}>
        <Heart name="heart" size={25} Color={Color.black}  />
      </View>
      <View style={styles.whitecontainer}>
        <Share name="sharealt" size={18} />
      </View>
    </View>
  ); 
};

export default LikeShare;

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'flex-end',
    // justifyContent:"flex-start",
   position:"absolute",
   top:10,
   right:10,
  
   
  },
  whitecontainer:
  {
    backgroundColor:Color.white,
    width:32,
    height:32,
    borderRadius:17,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },
});
