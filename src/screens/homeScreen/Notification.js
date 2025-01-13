import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotifyMsg from '../../components/NotifyMsg';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import { Img } from '../../utlis/ImagesPath';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const naviagtion=useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader gobackImage={Img.goback} detailtxt={'Notifications'}  onPress={()=>naviagtion.goBack("Home")}/>
      <View style={styles.subcontainer}>
        <NotifyMsg
          mrntop={20}
          message={'Daniela has sent you a message'}
          updatetime={'1m ago'}
          Imgsource={Img.notificationladyicon}
        />
        <NotifyMsg
          mrntop={20}
          message={'Monthly Rent Receiving Reminder'}
          updatetime={'1m ago'}
          Imgsource={Img.notificationladyicon}

        />
        <NotifyMsg
          mrntop={20}
          message={'Daniela has sent you a message'}
          updatetime={'1m ago'}
          Imgsource={Img.intro}
        />
        <NotifyMsg
          mrntop={20}
          message={'Daniela has sent you a message'}
          updatetime={'1m ago'}
          Imgsource={Img.notificationladyicon}
        />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
});
