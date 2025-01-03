import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PaymentBottomSheet from '../../components/PaymentBottomSheet';

const ReferEarn = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader detailtxt={'Invite'} />
      <Text>ReferEarn</Text>
      {/* <PaymentBottomSheet /> */}
    </View>
  );
};

export default ReferEarn;

const styles = StyleSheet.create({
  container: {},
});
