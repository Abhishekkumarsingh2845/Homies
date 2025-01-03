import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';

const Chattingmsg = ({alignTo, bgColor, textColor}) => {
  return (
    <View style={{alignItems: alignTo, justifyContent: 'flex-end'}}>
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <Text style={[styles.txt, {color: textColor}]}>
          Lorem ipsum dolor sit amet consectetur. Nunc tincidunt at at a ac.
          Lorem
        </Text>
      </View>
      <Text
        style={{
          textAlign: alignTo === 'flex-end' ? 'left' : 'left',
          marginTop: 5,
        }}>
        8:42pm
      </Text>
    </View>
  );
};

export default Chattingmsg;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 70,
    padding: 10,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    borderTopEndRadius: 5,
  },
  txt: {
    fontSize: 12,
    fontFamily: FontText.light,
  },
});
