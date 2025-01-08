import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Heart from 'react-native-vector-icons/EvilIcons';
import Share from 'react-native-vector-icons/AntDesign';
import { Color } from '../utlis/Color';
import { useNavigation } from '@react-navigation/native';

const LikeShare = () => {
  const naviagtion=useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.whitecontainer} onPress={()=>naviagtion.navigate("BookMark")}>
        <Heart name="heart" size={25} Color={Color.black}  />
      </TouchableOpacity>
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
