import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {Color} from '../../utlis/Color';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import NearbySeeAll from '../../components/NearbySeeAll';
import AllHostelDetail from '../../components/AllHostelDetail';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
// SortbyScreen
const AllHome = ({navigation}) => {
  // const navigation= useNavigation();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('SortbyScreen');
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);
  const alldetaildata = [
    {
      id: 1,
      mrntop: 10,
    },
    {
      id: 2,
      mrntop: 10,
    },
    {
      id: 3,
      mrntop: 10,
    },
    {
      id: 4,
      mrntop: 10,
    },
    {
      id: 5,
      mrntop: 10,
    },
    {
      id: 6,
      mrntop: 10,
    },
    {
      id: 7,
      mrntop: 10,
    },
  ];

 
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subcontainer}>
        <SearchBar />
        <NearbySeeAll />
        {/* <Icon name="rocket" size={30} color="#900" /> */}

        <FlatList
        showsVerticalScrollIndicator={false}
          data={alldetaildata}
          keyExtractor={item => item.id}
          renderItem={({item}) => <AllHostelDetail mrntop={item.mrntop} />}
        />
      </View>
    </View>
  );
};

export default AllHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.homeclr,
  },
  subcontainer: {
    paddingHorizontal: 10,
  },
});
