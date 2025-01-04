import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PersonalDetailElement from './PersonalDetailElement';

const PersonalDetailCard = () => {
  return (
    <View style={styles.container}>
      <PersonalDetailElement  title="Name" subtitle="Deniela Chiktiani" />
      <PersonalDetailElement  title="Mobile Number" subtitle=" +463 634 6774" />
      <PersonalDetailElement  title="Email" subtitle="daniela@gmail.com" />
      <PersonalDetailElement  title="College name" subtitle="Hans Raj College" />
    </View>
  );
};

export default PersonalDetailCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',marginHorizontal:20,
    borderRadius:10,
  },
});
