import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../components/Header';
import {Img} from '../../utlis/ImagesPath';
import SearchBar from '../../components/SearchBar';
import HostelInfoCard from '../../components/HostelInfoCard';
import SortByModal from '../../components/SortBymodal';
import SortByBtn from '../../components/SortByBtn';
import GuestModal from '../../components/GuestModal';
import {get} from '../../utlis/Api';
import {Color} from '../../utlis/Color';

const SortbyScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [loading, setloading] = useState();
  const [hostetData, sethostelData] = useState([]);
  console.log('hostelData in the sortbyscreen', hostetData);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

 

  const getHstdetail = async (filterData={}) => {
    const params = {
      long: '77.376945',
      lat: '28.628454',
      sortType:sortBy,
      ...filterData
    };
    setloading(true);
    try {
      const response = await get('getNearProperties', params);
      console.log("response of the getNearProperties =======",response.data[0]?.data.length);
      sethostelData(response?.data[0]?.data);
    } catch (error) {
      console.log(
        'error in  the getNearProperty',
        error?.response?.data || error.message,
      );
    } finally {
      setloading(false);
    }
  };
  console.log('sortByenum coming in the  sortbyscreen', sortBy);

    const handleFilter = useCallback((filterData) => {
      console.log("filterData" , filterData);
      getHstdetail(filterData)
    }, []);
  useEffect(() => {
    getHstdetail();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      {/* <Header Img1={Img.goback} nav={() => {navigation.navigate('Home')}} />
      <ScrollView contentContainerStyle={styles.subcontainer}> */}
      <Header Img1={Img.goback} />
      <ScrollView
        contentContainerStyle={styles.subcontainer}
        refreshControl={
          <RefreshControl onRefresh={getHstdetail} refreshing={loading} />
        }>
        <SearchBar
          destination={() => {}}
          placeholderText="Hostel Near Me"
          containerBgColor="white"
          handleFilter={handleFilter}
        />

        {loading ? (
          <>
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color={Color.primary} />
            </View>
          </>
        ) : (
          <>
            <FlatList
              data={hostetData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => <HostelInfoCard hostel={item} />}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={getHstdetail} />
              }
            />
          </>
        )}

        <SortByModal
          closemodal={closeModal}
          openthemodal={modalVisible}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <SortByBtn mrntop={15} onPress={openModal} />
        <View style={{marginVertical: 20}}></View>
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
