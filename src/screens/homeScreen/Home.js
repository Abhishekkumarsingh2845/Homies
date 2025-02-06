import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
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

const Home = ({navigation}) => {
  const images = [Img.hstimgage, Img.hstimgage, Img.hstimgage];
  const hostelData = [
    {id: 1, mrntop: 0},
    {id: 2, mrntop: 20, showRoomAvailability: true},
    {id: 3, mrntop: 20},
    {id: 4, mrntop: 20},
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle scroll position and update active index
  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / 350); // Image width is 350
    setActiveIndex(index);
  };
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
          showsVerticalScrollIndicator={false}>
          {/* <Image
            source={require('../../assets/images/map.png')}
            style={styles.mapImage}
          /> */}
          <MapSelect />
          <DotindictaorImg
            imageSource={Img.hstimgage}
            activeDotColor={Color.primary}
          />
          <NearbySeeAll />
          <FlatList
            contentContainerStyle={{paddingBottom: 120, paddingTop: 20}}
            showsVerticalScrollIndicator={false}
            data={hostelData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <HstDetail
                mrntop={item.mrntop}
                showRoomAvailability={item.showRoomAvailability}
              />
            )}
          />
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
