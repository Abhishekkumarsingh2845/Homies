import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import Chattingmsg from '../../components/Chattingmsg';

const AdminMessage = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader detailtxt={'Admin Group'} />
      <View style={styles.messagecontainer}>
        <Chattingmsg
          alignTo={'flex-end'}
          bgColor={'#FFB83A'}
          textColor={'white'}
        />
        <Chattingmsg bgColor={'#FAFAFA'} />
      </View>
      <View style={{marginTop: 370}}></View>
    </View>
  );
};

export default AdminMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagecontainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
