import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {Img} from '../utlis/ImagesPath';
import Icon from 'react-native-vector-icons/Octicons';
import InterestTracker from './InterestTracker';
import LikeShare from './LikeShare';
import {FontText} from '../utlis/CustomFont';
import {useNavigation} from '@react-navigation/native';
import DotIndicatorImg from './DotindictaorImg';
import {useSelector} from 'react-redux';

const HostelInfoCard = ({hostel}) => {
  const rating = Number(hostel?.rating) || 0;

  const StarArray = Array.from({length: rating}, (_, index) => index < rating);
  const ll = StarArray.length;

  const navigation = useNavigation();
  const {token} = useSelector(state => state.auth.user);

  console.log('->>>>>>>>rating ', hostel?.rating);
  console.log('->>>>>>>>admin ', hostel?.adminApproval);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('PropertyDetail', {propertyID: hostel?._id})
      }>
      <ImageBackground
        source={{uri: hostel?.property_images[0]}}
        style={styles.hostelimg}>
        {/* <InterestTracker /> */}
        <LikeShare />
        <View style={styles.dotContainer}>
          {[...Array(3)].map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === 0 && styles.activeDot]}
            />
          ))}
        </View>
      </ImageBackground>
      <View style={styles.PgDetail}>
        <View>
          <Text style={styles.description}>{hostel?.property_name}</Text>
          <Text style={styles.location}>{hostel?.property_id}</Text>
          {hostel?.adminApproval === 'Accept' && (
            <View style={styles.homeverifycontainer}>
              <Icon name="verified" color="#027516" size={16} />
              <Text style={styles.homeverify}>Homies Verified</Text>
              <View style={{marginVertical: 15}}></View>
            </View>
          )}
        </View>
        <View>
          <Text style={styles.price}>Starting from </Text>
          <Text style={styles.amount}>₹6,500</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            {StarArray.map((filled, index) => (
              <Image
                key={index}
                source={filled ? Img.ratingstarfilled : Img.ratingstaricon}
                style={styles.ratingstarstyle}
              />
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HostelInfoCard;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    backgroundColor: Color.white,
    marginTop: 20,

    paddingHorizontal: 10,
    borderRadius: 10,

    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: {width: 0, height: 2}, // Shadow position (iOS)
    shadowOpacity: 0.2, // Shadow transparency (iOS)
    shadowRadius: 4, // Shadow blur radius (iOS),
  },
  hostelimg: {
    width: '100%',
    // resizeMode:"contain"
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    height: 170,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    borderRadius: 10,
  },
  PgDetail: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical:20,
  },
  homeverifycontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 2,
  },
  ratingstarstyle: {
    width: 10,
    height: 10,
    marginRight: 5,
    // resizeMode:"contain",
  },
  description: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    lineHeight: 16,
    marginTop: 5,
  },
  location: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: Color.clr87,
    lineHeight: 14,
    marginTop: 5,
  },
  homeverify: {
    fontSize: 10,
    fontFamily: FontText.medium,
    color: Color.clr87,
    lineHeight: 14,
    marginLeft: 5,
  },
  price: {
    alignSelf: 'flex-end',
    fontSize: 7.26,
    fontFamily: FontText.medium,
    color: Color.black,
    lineHeight: 16.28,
  },
  amount: {
    alignSelf: 'flex-end',
    fontSize: 12,
    fontFamily: FontText.medium,
    color: '#0094FD',
    lineHeight: 16.28,
    // marginTop:5,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10, // Adjust the vertical position
    left: '50%', // Center horizontally
    flexDirection: 'row', // Align dots horizontally
    transform: [{translateX: -30}], // Adjust this based on total dot width
  },
  dot: {
    width: 8, // Dot size
    height: 8,
    borderRadius: 4, // Makes it circular
    backgroundColor: '#FFF', // Default dot color
    marginHorizontal: 5, // Space between dots
  },
  activeDot: {
    backgroundColor: '#007BFF', // Different color for the first dot
  },
});
