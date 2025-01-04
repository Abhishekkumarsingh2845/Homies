import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';

const NearLocationProperty = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={Img.morehostelicon} style={{width: 100, height: 80,borderRadius:10}} />
      <View style={styles.txtcontainer}>
      <Text>Asteria hostel</Text>
      <Text>Ram Nagar , NT 0872, Katraj</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearLocationProperty;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:"#FFFFFF",
    padding:10,
    borderRadius:10,
    marginTop:10,
  },
  txtcontainer:
  {
    marginLeft:15,
  }
});
