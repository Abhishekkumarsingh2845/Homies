import {
  ActivityIndicator,
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
import Geolocation from 'react-native-geolocation-service';
import {useDispatch, useSelector} from 'react-redux';
import {setLocation, setLocationStore} from '../../store/LocationSlice';
import {useNavigation} from '@react-navigation/native';
import {
  getNearPropertiesFunc,
  setLikeUnlike,
} from '../../store/PropertiesSlice';
import {getMyProperty} from '../../store/MyPropertySlice';

const Home = ({navigation}) => {
  const nav = useNavigation();
  const {data: hostetData, loading} = useSelector(
    state => state.getPropertiesSlice,
  );
  const dispatch = useDispatch();
  const {
    latitude,
    longitude,
    name: placeName,
  } = useSelector(state => state.location);
  const Navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  console.log('login screen--------1', latitude, placeName);

  const getHstdetail = async (filterData = {}) => {
    console.log('getHstdetail');

    const params = {
      long: '77.3769',
      lat: '28.6285',
      // lat: latitude,
      // long: longitude,
      ...filterData,
    };
    console.log('params=====================111111', params);

    try {
      dispatch(getNearPropertiesFunc(params));
    } catch (error) {
      console.log(
        'error in  the getNearProperty',
        error?.response?.data || error.message,
      );
    } finally {
      // setloading(false);
    }
  };

  useEffect(() => {
    getHstdetail();
  }, [latitude]);

  const handleFilter = useCallback(filterData => {
    console.log('filterData', filterData);
    getHstdetail(filterData);
  }, []);

  const toggleLike = async propertyId => {
    try {
      const response = await post('likeProperty', {
        propertyId,
        likedBy: user?._id,
      });
      dispatch(
        setLikeUnlike({
          propertyId: propertyId,
          isLiked: response?.data?.isLiked,
        }),
      );
    } catch (error) {
      console.log('Error liking/unliking property:', error.message);
    }
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const getPlaceName = async (latitude, longitude) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyA8KBPjCEIBIU0ujqQ7bacaQ5-dK2bUi7E`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('place name------', JSON.stringify(data));

      if (data.status === 'OK') {
        const formattedAddress = data.results[0]?.formatted_address;
        dispatch(
          setLocationStore({
            latitude: latitude,
            longitude: longitude,
            name: data.results[0]?.formatted_address,
          }),
        );
      } else {
        console.error('Error fetching place name:', data.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getLocation = async () => {
    console.log('position-----------------1');

    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log('position-----------------2', latitude, longitude);
        // getPlaceName('28.6285', '77.3769')
        getPlaceName(latitude, longitude);

        dispatch(setLocationStore({latitude: latitude, longitude: longitude}));

        console.log('system positon', latitude, longitude);
      },
      error => {
        console.log('Error getting location:', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const getMyPropertyFunc = async () => {
    dispatch(getMyProperty());
  };

  useEffect(() => {
    console.log('useeffect------------------');
    if (!hostetData) {
      getHstdetail();
    }
    getLocation();
    getMyPropertyFunc();
  }, []);

  const handlePlaceSelect = place => {
    dispatch(
      setLocationStore({
        latitude: place?.lat,
        longitude: place?.lon,
        name: place?.name,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Header
        Img1={Img.draw}
        locationIcon={Img.lcn}
        heartIcon={Img.hrt}
        OnPressBookmark={() => nav.navigate('BookMark')}
        bellIcon={Img.noitificationicon}
        locationName={placeName}
      />
      <View style={styles.subcontainer}>
        <SearchBar
          destination={'LocationSearch'}
          handleFilter={handleFilter}
          onSelect={handlePlaceSelect}
        />

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
          <NearbySeeAll OnPress={() => Navigation.navigate('SortbyScreen')} />

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
                contentContainerStyle={styles.flatlistcontainer}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  wrapper: {
    height: 200,
  },
  image: {
    width: 350,
    height: 150,
    resizeMode: 'cover',
    marginRight: 10,
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
  flatlistcontainer: {
    marginBottom: 100,
  },
});
