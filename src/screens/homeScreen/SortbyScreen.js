import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import SearchBar from '../../components/SearchBar';
import HostelInfoCard from '../../components/HostelInfoCard';
import SortByBtn from '../../components/SortByBtn';
import SearchBarr from '../../components/SearchBarr';
import SortBymodal from '../../components/SortBymodal';

const SortbyScreen = ({navigation}) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('Home');
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);
  const HostelInfoCardData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  return (
    <View style={styles.container}>
      <SecondaryHeader />
      <View style={styles.subcontainer}>
        {/* <HostelInfoCard /> */}
        {/* <SearchBarr/> */}
        <FlatList
          data={HostelInfoCardData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <HostelInfoCard />}
        />
      </View>
      <SortBymodal />
      <SortByBtn mrntop={50} />
    </View>
  );
};

export default SortbyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gobackstyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  subcontainer: {
    paddingHorizontal: 10,
  },
});
