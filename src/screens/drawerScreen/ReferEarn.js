import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PaymentBottomSheet from '../../components/PaymentBottomSheet';
import {useNavigation} from '@react-navigation/native';
import PayNow from '../../components/PayNow';
import Invite from '../../components/Invite';
import Invitebtn from '../../components/Invitebtn';
import {Img} from '../../utlis/ImagesPath';
import PayNowbtn from '../../components/PayNowbtn';
import {ScreenDimensions} from '../../utlis/DimensionApi';

const ReferEarn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Invite'}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.subcontainer}>
        {/* <PayNow icon={<PayNowbtn msg="Redeem" />} /> */}
        <Invite />
        <Invite />
        <Invite />
        <View
          style={{
            alignItems: 'flex-end',
            marginTop: ScreenDimensions.screenHeight * 0.2,
          }}>
          <Invitebtn msg="+ADD" />
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
