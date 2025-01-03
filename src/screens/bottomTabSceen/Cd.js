import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import Header from '../../components/Header';
import Complaint from '../../components/Complaint';
import PrimaryBtn from '../../components/PrimaryBtn';
import { Color } from '../../utlis/Color';

const Cd = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subcontainer}>
        <Complaint />
        <Complaint />
        <Complaint />
        <PrimaryBtn txt={"+ADD"} bgcolor={Color.primary} mgntop={200}/>
      </View>
    </View>
  );
};

export default Cd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
});
