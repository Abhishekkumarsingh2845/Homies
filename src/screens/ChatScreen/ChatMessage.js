import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import Chattingmsg from '../../components/Chattingmsg';
import {Color} from '../../utlis/Color';
import MessageTypeBar from '../../components/MessageTypeBar';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation, useRoute} from '@react-navigation/native';
import {get} from '../../utlis/Api';

const ChatMessage = () => {
  const navigation = useNavigation();
  const [msg, setmsg] = useState([]);
  const route = useRoute();
  const chatId = route.params?.chatId;
  groupName = route.params?.groupName;
  console.log('Chat ID:', chatId);
  console.log('groupName', groupName);
  const getgroupMessage = async () => {
    const params = {
      groupId: chatId,
    };


    try {
      const response = await get('getGroupMessage', params);
      console.log('response of the getgroupMessage', response.data);
      setmsg(response.data);
    } catch (error) {
      console.log('error in the getgroupMessage', error.message);
    }
    
  };
  useEffect(() => {
    getgroupMessage();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={groupName || 'Property Name'}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.messagecontainer}>
        {msg.length > 0 ? (
          msg.map((item, index) => (
            <Chattingmsg
              key={index}
              msg={item.message}
              alignTo={'flex-end'}
              bgColor={'#FFB83A'}
              textColor={'white'}
            />
          ))
        ) : (
          <Text>No messages found</Text>
        )}
      </View>
      <View style={styles.admincontainer}>
        <Text style={styles.admintxt}>Only Admin can send message </Text>
      </View>
      {/* <View style={{marginTop: 320}}>
        <MessageTypeBar />
      </View> */}
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messagecontainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  admintxt: {
    fontSize: 12,
    color: '#575757',
  },
  admincontainer: {
    backgroundColor: '#FFCF9D',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 15,
    textAlign: 'center',
    alignItems: 'center',
  },
});
