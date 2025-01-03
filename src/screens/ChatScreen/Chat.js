import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatCmp from '../../components/ChatCmp';
import {Img} from '../../utlis/ImagesPath';
import Header from '../../components/Header';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.groupchattxt}>Group Chat</Text>
      <View style={styles.subcontainer}>
        <ChatCmp
          mrntop={20}
          Imgsource={Img.storeimgicon}
          message={'Property Group Name'}
          updatetime={'08:42pm'}
          chatmsg={'Hi How are you'}
        />
        <ChatCmp
          mrntop={20}
          Imgsource={Img.storeimgicon}
          message={'Property Group Name'}
          updatetime={'08:42pm'}
          chatmsg={'Hi How are you'}
        />
        <ChatCmp
          mrntop={20}
          Imgsource={Img.storeimgicon}
          message={'Property Group Name'}
          updatetime={'08:42pm'}
          chatmsg={'Hi How are you'}
        />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  subcontainer: {
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
  },
  groupchattxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
