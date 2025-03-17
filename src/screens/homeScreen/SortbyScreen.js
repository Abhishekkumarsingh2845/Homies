import React, { useCallback, useEffect, useState } from 'react';
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

import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { Img } from '../../utlis/ImagesPath';
import SearchBar from '../../components/SearchBar';
import HostelInfoCard from '../../components/HostelInfoCard';
import SortByModal from '../../components/SortBymodal';
import SortByBtn from '../../components/SortByBtn';
import { Color } from '../../utlis/Color';
import { getNearPropertiesFunc } from '../../store/PropertiesSlice';
import { useRoute } from '@react-navigation/native';
import { setLocationStore } from '../../store/LocationSlice';

const SortbyScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState('');
  console.log("setSortBy==================" , sortBy)
  const dispatch = useDispatch();
  const { data: hostetData, loading } = useSelector(
    state => state.getPropertiesSlice,
  );

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const { latitude, longitude , name : placeName } = useSelector(state => state.location);


  //in his function i have used thunk to make  api call
  const getHstdetail = useCallback(
    async (filterData = {}) => {
    console.log("getting refresh = = = " , latitude , longitude , placeName)

      const params = {
        long:  longitude|| '77.376945',
        lat: latitude || '28.628454',
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
    [dispatch, sortBy , latitude],
  );
  useEffect(() => {
    if (sortBy) {
      getHstdetail();
    }
  }, [sortBy]);

    const handlePlaceSelect = (place) => {
      dispatch(setLocationStore({latitude: place?.lat, longitude: place?.lon , name : place?.name}))
    };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header Img1={Img.goback} nav={() => navigation.navigate('Home')}          locationName={placeName}     locationIcon={Img.lcn}/>
      <ScrollView
        contentContainerStyle={styles.subcontainer}
        refreshControl={
          <RefreshControl onRefresh={getHstdetail} refreshing={loading} />
        }>
        {/* <SearchBar
          destination={() => { }}
          placeholderText="Hostel Near Me"
          containerBgColor="white"
          handleFilter={getHstdetail}
        /> */}
                <SearchBar destination={'LocationSearch'} handleFilter={getHstdetail} onSelect={handlePlaceSelect} />

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={Color.primary} />
          </View>
        ) : (
          <FlatList
            data={hostetData}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => {
              return( <View style={{ flex: 1, padding : 20 , alignItems : 'center'}}>
                <Text style={{fontSize : 18 , fontWeight : 500}}>No Data Available</Text>
              </View>)
            }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <HostelInfoCard hostel={item} />}
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

        {  hostetData?.length > 0 && <SortByBtn mrntop={15} onPress={openModal} /> }
        <View style={{ marginVertical: 20 }} />
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
