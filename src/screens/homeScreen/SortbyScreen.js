import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import SearchBar from '../../components/SearchBar';
import HostelInfoCard from '../../components/HostelInfoCard';
import SortByBtn from '../../components/SortByBtn';
import SearchBarr from '../../components/SearchBarr';
import SortBymodal from '../../components/SortBymodal';
import LocationSearch from './LocationSearch';
import CommonHeader from '../../components/CommonHeader';

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
    // {
    //   id: 3,
    // },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header Img1={Img.goback}/>
      <View style={styles.subcontainer}>
        {/* <HostelInfoCard /> */}
        <SearchBar
          destination={LocationSearch}
          placeholderText="Hostel Near Me"
          containerBgColor="white"
        />
        <FlatList
          data={HostelInfoCardData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <HostelInfoCard />}
        />
      </View>
      <SortBymodal />
      {/* <SortByBtn mrntop={10} /> */}
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
