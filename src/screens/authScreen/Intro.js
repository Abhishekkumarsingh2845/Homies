import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {Color} from '../../utlis/Color';
import {Img} from '../../utlis/ImagesPath';
import PrimaryBtn from '../../components/PrimaryBtn';
const Intro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.skiptxt}>Skip</Text>
      <Swiper
        style={styles.imgcontainer1}
        showsButtons={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}>
        <ImageBackground source={Img.intro} style={styles.introimg} />
        <ImageBackground source={Img.intro} style={styles.introimg} />
        <ImageBackground source={Img.intro} style={styles.introimg} />
      </Swiper>
      <Text style={styles.letfind}>Let’s Find Your Sweet &</Text>
      <Text style={styles.dream}>Dream Place</Text>
      <Text style={styles.getoptuty}>
        Get the opportunity to stay that you dream of
      </Text>
      <Text style={styles.price}>at an affordable price</Text>
      <PrimaryBtn
        txt={'Next'}
        destination={'LoginSignup'}
        clr={Color.white}
        bgcolor={Color.primary}
        mgntop={Platform.OS === 'android' ? 70 : 30}
      />
      <View style={{marginBottom: 50}}></View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: Color.white,
  },
  skiptxt: {
    textAlign: 'right',
    fontWeight: '400',
    fontSize: 16,
    // lineHeight: 20,
    color: Color.skipcolor,
  },
  introimg: {
    width: 550,
    height: Platform.OS === 'android' ? 550 : 500,
    resizeMode: 'contain',
  },
  activeDot: {
    backgroundColor: Color.primary,
  },
  imgcontainer1: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',

    // width:300,
  },
  letfind: {
    fontSize: 26,
    fontWeight: '700',
    // lineHeight: 33.6,
    color: Color.primary,
    alignSelf: 'center',
    letterSpacing: 4,
    // marginBottom:90
  },
  dream: {
    fontSize: 26,
    fontWeight: '700',
    // lineHeight: 33.6,
    color: Color.primary,
    alignSelf: 'center',
    letterSpacing: 4,
  },
  getoptuty: {
    fontSize: 16,
    fontWeight: '400',
    // lineHeight: 19.6,
    color: Color.black,
    alignSelf: 'center',
    letterSpacing: 0.3,
    marginTop: 15,
  },
  price: {
    fontSize: 16,
    fontWeight: '400',
    // lineHeight: 19.6,
    color: Color.black,
    alignSelf: 'center',
    letterSpacing: 0.3,
    // marginTop:15
  },
});

// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import React, {useState, useRef} from 'react';

// const dataa = [
//   {
//     id: 1,
//     image: require('../../assets/images/introimg1.png'),
//     title: 'Out Station Bidding',
//     subtitle: 'Request a ride get picked up by a',
//     description: 'nearby community driver',
//   },
//   {
//     id: 2,
//     image: require('../../assets/images/introimg1.png'),
//     title: 'Unique QR or Instant Booking',
//     subtitle: 'Huge drivers network helps you find ',
//     description: 'comforable, safe and cheap ride',
//   },
//   {
//     id: 3,
//     image: require('../../assets/images/introimg1.png'),
//     title: '24*7 Support',
//     subtitle: 'Enjoy your ride with Taxi App reliable service.',
//     description: 'service',
//   },
// ];

// const Walkthough = ({navigation}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const viewabilityConfig = {itemVisiblePercentThreshold: 50};

//   const onViewRef = useRef(({viewableItems}) => {
//     if (viewableItems.length > 0) {
//       setCurrentIndex(viewableItems[0].index);
//     }
//   });

//   const render = ({item}) => (
//     <View style={styles.container}>
//       <Image source={item.image} style={styles.walkth} />
//     </View>
//   );

//   const renderIndicators = () => {
//     return (
//       <View style={styles.indicatorContainer}>
//         {dataa.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.indicator,
//               {backgroundColor: index === currentIndex ? '#FCCB06' : 'grey'},
//             ]}
//           />
//         ))}
//       </View>
//     );
//   };

//   return (
//     <View>
//       <View style={styles.flatlistContainer}>
//         <FlatList
//           data={dataa}
//           renderItem={render}
//           keyExtractor={item => item.id.toString()}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           decelerationRate="fast"
//           snapToInterval={300}
//           onViewableItemsChanged={onViewRef.current}
//           viewabilityConfig={viewabilityConfig}
//         />
//         {renderIndicators()}
//       </View>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('Register')}
//         style={{marginTop: 20}}>
//         <Text>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Walkthough;

// const styles = StyleSheet.create({
//   bckimg: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   flatlistContainer: {
//     height: 420,
//     alignItems: 'center',
//     // backgroundColor:"red",
//   },
//   walkth: {
//     width: 450,
//     height: 450,
//     resizeMode: 'contain',
//     // alignSelf:"center",
//   },
//   container: {
//     // width: 400,
//     width: 500,
//     height: 500,
//   alignSelf:"center",
//     marginTop: 80,
//     // backgroundColor:"red"
//   },
//   txt: {
//     fontSize: 24,
//     fontWeight: '500',
//     color: '#222E50',
//     fontFamily: 'Inter-Medium',
//     marginTop: 10,
//   },
//   txt2: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#8E92A8',
//     fontFamily: 'Inter-Medium',
//     marginTop: 10,
//   },
//   txt3: {
//     fontSize: 14,
//     fontWeight: '400',
//     fontFamily: 'Inter-Medium',
//     color: '#8E92A8',
//   },
//   indicatorContainer: {
//     flexDirection: 'row',
//     marginTop:15,
//   },
//   indicator: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   newuser: {
//     fontSize: 14,
//     color: 'gainsboro',
//   },
//   register: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 24,
//   },
//   txt11: {
//     fontSize: 14,
//     fontFamily: 'Inter-Medium',
//     fontWeight: '400',
//     color: '#8E92A8',
//   },
//   txt22: {
//     fontSize: 14,
//     marginLeft: 5,
//   },
// });