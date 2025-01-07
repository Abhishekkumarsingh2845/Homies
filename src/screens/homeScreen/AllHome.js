import {FlatList, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {Color} from '../../utlis/Color';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import NearbySeeAll from '../../components/NearbySeeAll';
import AllHostelDetail from '../../components/AllHostelDetail';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import DotindictaorImg from '../../components/DotindictaorImg';
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
        <ScrollView showsVerticalScrollIndicator={false}>
        <NearbySeeAll />
        {/* <Icon name="rocket" size={30} color="#900" /> */}
        <Image
          source={require('../../assets/images/map.png')}
          style={styles.mapImage}
        />
        <DotindictaorImg />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={alldetaildata}
          keyExtractor={item => item.id}
          renderItem={({item}) => <AllHostelDetail mrntop={item.mrntop} />}
        />
        </ScrollView>
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
  mapImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});
