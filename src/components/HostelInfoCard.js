import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {Img} from '../utlis/ImagesPath';
import Icon from 'react-native-vector-icons/Octicons';
import InterestTracker from './InterestTracker';
import LikeShare from './LikeShare';
import {FontText} from '../utlis/CustomFont';
import { useNavigation } from '@react-navigation/native';
import DotIndicatorImg from './DotindictaorImg';
import { useSelector } from 'react-redux';

const HostelInfoCard = ({item}) => {
  const StarArray = new Array(5).fill(0);
  const navigation=useNavigation();
  const {token} = useSelector(state => state.auth.user)
  return (
  <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("PropertyDetail" , {detail : item})} >
      <ImageBackground source={Img.hstdetail} style={styles.hostelimg}>
        <InterestTracker />
        <LikeShare />
        <View style={styles.dotContainer}>
    {/* Example of 3 dots with the first one styled differently */}
    {[...Array(3)].map((_, index) => (
      <View 
        key={index} 
        style={[styles.dot, index === 0 && styles.activeDot]} // Apply `activeDot` only to the first dot
      />
    ))}
  </View>
      </ImageBackground>
      <View style={styles.PgDetail}>
        <View>
          <Text style={styles.description}>PG for Anyone in Sector 52</Text>
          <Text style={styles.location}>
            Block E, Near Sector 52 Metro Station
          </Text>
          <View style={styles.homeverifycontainer}>
            <Icon name="verified" color="#027516" size={16} />
            <Text style={styles.homeverify}>Homies Verified</Text>
            <View style={{marginVertical:15}}></View>
          </View>
        </View>
        <View>
          <Text style={styles.price}>Starting from </Text>
          <Text style={styles.amount}>₹6,500</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            {StarArray.map((_, index) => (
              <Image
                key={index}
                source={Img.ratingstaricon}
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
    overflow:"hidden",
    borderRadius:10,
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
    transform: [{ translateX: -30 }], // Adjust this based on total dot width
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
