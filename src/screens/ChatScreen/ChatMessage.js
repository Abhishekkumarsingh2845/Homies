import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import Chattingmsg from '../../components/Chattingmsg';
import { Color } from '../../utlis/Color';
import MessageTypeBar from '../../components/MessageTypeBar';

const ChatMessage = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader detailtxt={'Property Group Name'} />
      <View style={styles.messagecontainer}>
        <Chattingmsg alignTo={"flex-end"} bgColor={"#FFB83A"} textColor={"white"} />
        <Chattingmsg bgColor={"#FAFAFA"}/>
      </View>
      <View style={{marginTop:370}}>
      <MessageTypeBar/>
      </View>
     
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFFFF"
  },
  messagecontainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});