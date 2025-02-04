// import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Header from '../../components/Header';
// import SecondaryHeader from '../../components/SecondaryHeader';
// import {Img} from '../../utlis/ImagesPath';
// import SearchBar from '../../components/SearchBar';
// import HostelInfoCard from '../../components/HostelInfoCard';
// import SortByBtn from '../../components/SortByBtn';
// import SearchBarr from '../../components/SearchBarr';
// import SortBymodal from '../../components/SortBymodal';
// import LocationSearch from './LocationSearch';
// import CommonHeader from '../../components/CommonHeader';

// const SortbyScreen = ({navigation}) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const openModal = () => setModalVisible(true);
//   const closeModal = () => setModalVisible(false);
//   const HostelInfoCardData = [
//     {
//       id: 1,
//     },
//   ];
//   return (
//     <View style={styles.container}>
//       <SafeAreaView />
//       <Header Img1={Img.goback} />
//       <View style={styles.subcontainer}>
//         {/* <HostelInfoCard /> */}
//         <SearchBar
//           destination={LocationSearch}
//           placeholderText="Hostel Near Me"
//           containerBgColor="white"
//         />
//         <FlatList
//           data={HostelInfoCardData}
//           showsVerticalScrollIndicator={false}
//           keyExtractor={item => item.id}
//           renderItem={({item}) => <HostelInfoCard />}
//         />
//         <SortBymodal closemodal={closeModal} modalVisible={openModal} />
//       </View>
//     </View>
//   );
// };

// export default SortbyScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   gobackstyle: {
//     width: 25,
//     height: 25,
//     resizeMode: 'contain',
//   },
//   subcontainer: {
//     paddingHorizontal: 10,
//   },
// });




import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {Img} from '../../utlis/ImagesPath';
import SearchBar from '../../components/SearchBar';
import HostelInfoCard from '../../components/HostelInfoCard';
import SortByModal from '../../components/SortBymodal';
import SortByBtn from '../../components/SortByBtn';

const SortbyScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  // const HostelInfoCardData = [{id: 1,id:2}];
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
          openthemodal={modalVisible} // Pass the modal visibility
        />
        {/* Button to open the modal */}
        {/* <TouchableOpacity onPress={openModal} style={styles.openModalBtn}>
          <Text style={styles.openModalText}>Open Sort By Modal</Text>
        </TouchableOpacity> */}
        <SortByBtn mrntop={15} onPress={openModal}/>
        <View style={{marginVertical:20}}></View>
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
