import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PaymentBottomSheet from '../../components/PaymentBottomSheet';
import {useNavigation} from '@react-navigation/native';
import PayNow from '../../components/PayNow';
import Invite from '../../components/Invite';
import Invitebtn from '../../components/Invitebtn';
import {Img} from '../../utlis/ImagesPath';

const ReferEarn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Invite'}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.subcontainer}>
        <PayNow />
        <Invite />
        <Invite />
        <Invite />
        <View style={{alignItems: 'flex-end', marginTop: 190}}>
          <Invitebtn />
        </View>
      </View>
      {/* <PaymentBottomSheet /> */}
    </View>
  );
};

export default ReferEarn;

const styles = StyleSheet.create({
  container: {},
  subcontainer: {
    paddingHorizontal: 20,
  },
});
