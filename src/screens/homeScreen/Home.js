import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import HstDetail from '../../components/HostelDetail';
import NearbySeeAll from '../../components/NearbySeeAll';
import {Img} from '../../utlis/ImagesPath';
import Swiper from 'react-native-swiper';
import {Color} from '../../utlis/Color';
import DotindictaorImg from '../../components/DotindictaorImg';
import LocationSearch from './LocationSearch';
import MapSelect from '../../components/Map';
import {get, post} from '../../utlis/Api';

const Home = ({navigation}) => {
  const [loading, setloading] = useState();
  const [hostetData, sethostelData] = useState([]);

  const getHstdetail = async () => {
    const params = {
      long: '77.376945',
      lat: '28.628454',
    };
    setloading(true);
    try {
      const response = await get('getNearProperties', params);
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
  const toggleLike = async propertyId => {
    try {
      const response = await post('likeProperty', {
        propertyId,
        likedBy: '677d21015dcde6948d900c6c',
      });

      // Check if likedBy array is empty → Unliked, otherwise → Liked
      sethostelData(prevData =>
        prevData.map(item =>
          item._id === propertyId
            ? {...item, likedBy: response.data.likedBy || []}
            : item,
        ),
      );
    } catch (error) {
      console.log('Error liking/unliking property:', error.message);
    }
  };
  useEffect(() => {
    getHstdetail();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        Img1={Img.draw}
        locationIcon={Img.lcn}
        heartIcon={Img.hrt}
        bellIcon={Img.noitificationicon}
      />
      <View style={styles.subcontainer}>
        <SearchBar destination={LocationSearch} />

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
            backgroundColor: '#F1F1F1',
          }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl onRefresh={getHstdetail} refreshing={loading} />
          }>
          <MapSelect />
          <DotindictaorImg
            imageSource={Img.hstimgage}
            activeDotColor={Color.primary}
          />
          <NearbySeeAll />

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
                keyExtractor={item => item._id.toString()}
                renderItem={({item}) => (
                  <HstDetail
                    hostel={item}
                    onLikePress={() => toggleLike(item._id)}
                  />
                )}
                refreshControl={
                  <RefreshControl
                    refreshing={loading}
                    onRefresh={getHstdetail}
                  />
                }
              />
            </>
          )}
        </ScrollView>
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
  mapImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  loaderContainer: {
    // Style for the loader container
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Adjust as needed
  },
  wrapper: {
    height: 200,
  },
  image: {
    width: 350, // Adjust width for horizontal scroll
    height: 150, // Adjust height for horizontal scroll
    resizeMode: 'cover',
    marginRight: 10, // Add spacing between images
    borderRadius: 10,
  },
  inactiveDot: {
    backgroundColor: '#D3D3D3',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#007BFF',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  horiscrollviewcontainer: {
    marginVertical: 20,
  },

  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: Color.btnclr,
    width: 8,
    height: 8,
    borderRadius: 5,
  },
});
{
  /* <FlatList
contentContainerStyle={{paddingBottom: 120, paddingTop: 20}}
showsVerticalScrollIndicator={false}
data={hostetData}
keyExtractor={item =>
  item._id ? item._id.toString() : Math.random().toString()
}
renderItem={({item}) => (
  <HstDetail hostel={item} style={{marginTop: 10}} />
)}
/> */
}
