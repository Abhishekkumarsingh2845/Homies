import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import {Img} from '../../utlis/ImagesPath';
import SearchBar from '../../components/SearchBar';
import HostelInfoCard from '../../components/HostelInfoCard';
import SortByModal from '../../components/SortBymodal';
import SortByBtn from '../../components/SortByBtn';
import {Color} from '../../utlis/Color';
import {getNearPropertiesFunc} from '../../store/PropertiesSlice';

const SortbyScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const dispatch = useDispatch();
  const {data: hostetData, loading} = useSelector(
    state => state.getPropertiesSlice,
  );

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  //in his function i have used simple api call
  // const getHstdetail = useCallback(
  //   async (filterData = {}) => {
  //     const params = {
  //       long: '77.376945',
  //       lat: '28.628454',
  //       sortType: sortBy, // Include sortBy in API call
  //       ...filterData,
  //     };

  //     try {
  //       dispatch(getNearPropertiesFunc(params));
  //     } catch (error) {
  //       console.log(
  //         'error in the getNearProperty',
  //         error?.response?.data || error.message,
  //       );
  //     }
  //   },
  //   [dispatch, sortBy],
  // );

  //in his function i have used thunk to make  api call
  const getHstdetail = useCallback(
    async (filterData = {}) => {
      console.log('getHstdetail in the sortby');
      const params = {
        long: '77.376945',
        lat: '28.628454',
        sortType: sortBy,
        ...filterData,
      };
      try {
        dispatch(getNearPropertiesFunc(params));
      } catch (error) {
        console.log(
          'error in the getNearPropertiesFunc',
          error.message || error?.response?.data,
        );
      }
    },
    [dispatch, sortBy],
  );
  useEffect(() => {
    getHstdetail();
  }, [sortBy]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header Img1={Img.goback} nav={() => navigation.navigate('Home')} />
      <ScrollView
        contentContainerStyle={styles.subcontainer}
        refreshControl={
          <RefreshControl onRefresh={getHstdetail} refreshing={loading} />
        }>
        <SearchBar
          destination={() => {}}
          placeholderText="Hostel Near Me"
          containerBgColor="white"
          handleFilter={getHstdetail}
        />

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={Color.primary} />
          </View>
        ) : (
          <FlatList
            data={hostetData}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => <HostelInfoCard hostel={item} />}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={getHstdetail} />
            }
          />
        )}

        <SortByModal
          closemodal={closeModal}
          openthemodal={modalVisible}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <SortByBtn mrntop={15} onPress={openModal} />
        <View style={{marginVertical: 20}} />
      </ScrollView>
    </View>
  );
};

export default SortbyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 10,
  },
  openModalBtn: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  openModalText: {
    color: 'white',
    textAlign: 'center',
  },
});
