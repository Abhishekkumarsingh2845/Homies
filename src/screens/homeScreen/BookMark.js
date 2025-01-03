import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import Subheader from '../../components/Subheader';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import AllHostelDetail from '../../components/AllHostelDetail';
import HostelInfoCard from '../../components/HostelInfoCard';

const BookMark = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader detailtxt={'Bookmark'} />
      <View style={styles.detailcontainer}>
        <AllHostelDetail mrntop={15} />
        <AllHostelDetail mrntop={15} />
       
      </View>
    </View>
  );
};

export default BookMark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"red"
  },
  detailcontainer: {
    paddingHorizontal: 10,
  },
});
