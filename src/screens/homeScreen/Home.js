import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import HostelImg from '../../components/HostelImg';
import HstDetail from '../../components/HostelDetail';
import NearbySeeAll from '../../components/NearbySeeAll';

const Home = ({navigation}) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('AllHome');
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);
  const hostelData = [
    {
      id: 1,
      mrntop: 0,
    },
    {
      id: 2,
      mrntop: 20,
      showRoomAvailability: true,
    },
    {
      id: 3,
      mrntop: 20,
    },
    {
      id: 4,
      mrntop: 20,
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subcontainer}>
        <SearchBar />
        {/* <HostelImg/> */}
        <NearbySeeAll />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={hostelData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <HstDetail
              mrntop={item.mrntop}
              showRoomAvailability={item.showRoomAvailability}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  subcontainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
