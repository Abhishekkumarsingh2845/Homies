import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import AllHostelDetail from '../../components/AllHostelDetail';
import HostelInfoCard from '../../components/HostelInfoCard';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import {get} from '../../utlis/Api';

const BookMark = () => {
  const [loading, setloading] = useState(false);
  const [bookmark, setbookmark] = useState([]);

  const navigation = useNavigation();

  const getBookmark = async () => {
    try {
      const response = await get('myBookmarkedProperty');
      console.log('success in the  book', response?.data);
      setbookmark(response?.data);
      console.log('succes in the Bookmark', response);
    } catch (error) {
      console.log(
        'error in  the  getBookmark',
        error?.response?.data || error?.message,
      );
    }
  };

  useEffect(() => {
    getBookmark();
  }, []);

  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Bookmark'}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.detailcontainer}>
        <FlatList
          data={bookmark}
          showsVerticalScrollIndicator={false}
          keyExtractor={item =>
            item._id ? item._id.toString() : Math.random().toString()
          }
          renderItem={({item}) => <AllHostelDetail hostel={item} />}
        />
        {/* <AllHostelDetail mrntop={15} />
        <AllHostelDetail mrntop={15} /> */}
      </View>
    </View>
  );
};

export default BookMark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"red"
  },
  detailcontainer: {
    paddingHorizontal: 10,
  },
});
