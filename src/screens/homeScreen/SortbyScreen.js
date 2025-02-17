import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {Img} from '../../utlis/ImagesPath';
import SearchBar from '../../components/SearchBar';
import HostelInfoCard from '../../components/HostelInfoCard';
import SortByModal from '../../components/SortBymodal';
import SortByBtn from '../../components/SortByBtn';
import GuestModal from '../../components/GuestModal';
import {get} from '../../utlis/Api';

const SortbyScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [loading, setloading] = useState();
  const [hostetData, sethostelData] = useState([]);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const HostelInfoCardData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  // const handleSortByFilter = async () => {
  //   const params = {
  //     propertyId: '6773a32551be0fa4b0c3d95f',
  //     filter: 'Top-Rated',
  //   };
  //   try {
  //     const response = await get('getReviewByFilter', params);
  //     console.log('response of the getReviewByFilter API ', response);
  //   } catch (error) {
  //     console.log(
  //       'Error in getReviewByFilter',
  //       error?.message || error?.response?.data,
  //     );
  //   }
  // };

  const getHstdetail = async () => {
    const params = {
      long: '77.376945',
      lat: '28.628454',
      sortType:sortBy,
    };
    setloading(true);
    try {
      const response = await get('getNearProperties', params);
      console.log("response of the getNearProperties Api for sortby filter",response.data);
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
  useEffect(() => {
    getHstdetail();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header Img1={Img.goback} />
      <ScrollView contentContainerStyle={styles.subcontainer}>
        <SearchBar
          destination={() => {}}
          placeholderText="Hostel Near Me"
          containerBgColor="white"
        />
        <FlatList
          data={HostelInfoCardData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <HostelInfoCard />}
        />
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
