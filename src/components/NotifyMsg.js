import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';

const NotifyMsg = ({mrntop,message,updatetime,Imgsource}) => {
  return (
    <View style={[styles.container,{marginTop:mrntop}]}>
      <Image
        source={Imgsource}
        style={styles.notificationiconstyle}
      />
      <View style={styles.msgandtimecontainer}>
        <Text style={styles.msgtxtstyle}>{message}</Text>
        <Text style={styles.time}>{updatetime}</Text>
      </View>
    </View>
  );
};

export default NotifyMsg;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:2,
    paddingVertical:10,
    borderColor:"#F0EBEB",
  },
  notificationiconstyle: {
    width: 50,
    height: 50,
  },
  msgandtimecontainer: {
    marginLeft: 10,
  },
  msgtxtstyle: {
    fontSize: 14,
    fontFamily: FontText.medium,
    lineHeight: 18,
    color: Color.black,
  },
  time: {
    fontSize: 12,
    fontFamily: FontText.medium,
    lineHeight: 16,
    color: Color.clr87,
  },
});
